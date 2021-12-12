"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cacache = require("cacache");
const crypto_1 = require("crypto");
const path = require("path");
const postcss_1 = require("postcss");
const postcssUrl = require("postcss-url");
const cssnano = require("cssnano");
const worker_threads_1 = require("worker_threads");
const postcssPresetEnv = require("postcss-preset-env");
const stylesheet_processor_1 = require("./stylesheet-processor");
const fs_1 = require("../utils/fs");
const ngPackagrVersion = require('../../package.json').version;
async function processCss({ filePath, browserslistData, cssUrl, styleIncludePaths, basePath, cachePath, }) {
    const content = await fs_1.readFile(filePath, 'utf8');
    let key;
    if (!content.includes('@import') && !content.includes('@use')) {
        // No transitive deps, we can cache more aggressively.
        key = generateKey(content, browserslistData);
        const result = await readCacheEntry(cachePath, key);
        if (result) {
            return result;
        }
    }
    // Render pre-processor language (sass, styl, less)
    const renderedCss = await renderCss(filePath, content, basePath, styleIncludePaths);
    // We cannot cache CSS re-rendering phase, because a transitive dependency via (@import) can case different CSS output.
    // Example a change in a mixin or SCSS variable.
    if (!key) {
        key = generateKey(renderedCss, browserslistData);
        const cachedResult = await readCacheEntry(cachePath, key);
        if (cachedResult) {
            return cachedResult;
        }
    }
    // Render postcss (autoprefixing and friends)
    const result = await optimizeCss(filePath, renderedCss, browserslistData, cssUrl);
    // Add to cache
    await cacache.put(cachePath, key, result.css);
    return {
        css: result.css,
        warnings: result.warnings().map(w => w.toString()),
    };
}
async function renderCss(filePath, css, basePath, styleIncludePaths) {
    const ext = path.extname(filePath);
    switch (ext) {
        case '.sass':
        case '.scss': {
            /*
             * Please be aware of the few differences in behaviour https://github.com/sass/dart-sass/blob/master/README.md#behavioral-differences-from-ruby-sass
             * By default `npm install` will install sass.
             * To use node-sass you need to use:
             *   Npm:
             *     `npm install node-sass --save-dev`
             *   Yarn:
             *     `yarn add node-sass --dev`
             */
            let sassCompiler;
            try {
                sassCompiler = require('node-sass'); // Check if node-sass is explicitly included.
            }
            catch {
                sassCompiler = await Promise.resolve().then(() => require('sass'));
            }
            return sassCompiler
                .renderSync({
                file: filePath,
                data: css,
                indentedSyntax: '.sass' === ext,
                importer: await Promise.resolve().then(() => require('node-sass-tilde-importer')),
                includePaths: styleIncludePaths,
            })
                .css.toString();
        }
        case '.less': {
            const { css: content } = await (await Promise.resolve().then(() => require('less'))).render(css, {
                filename: filePath,
                javascriptEnabled: true,
                paths: styleIncludePaths,
            });
            return content;
        }
        case '.styl':
        case '.stylus': {
            const stylus = await Promise.resolve().then(() => require('stylus'));
            return (stylus(css)
                // add paths for resolve
                .set('paths', [basePath, '.', ...styleIncludePaths, 'node_modules'])
                // add support for resolving plugins from node_modules
                .set('filename', filePath)
                // turn on url resolver in stylus, same as flag --resolve-url
                .set('resolve url', true)
                .define('url', stylus.resolver(undefined))
                .render());
        }
        case '.css':
        default:
            return css;
    }
}
function optimizeCss(filePath, css, browsers, cssUrl) {
    const postCssPlugins = [];
    if (cssUrl !== stylesheet_processor_1.CssUrl.none) {
        postCssPlugins.push(postcssUrl({ url: cssUrl }));
    }
    postCssPlugins.push(postcssPresetEnv({
        browsers,
        autoprefixer: true,
        stage: 3,
    }), cssnano({
        preset: [
            'default',
            {
                // Disable SVG optimizations, as this can cause optimizations which are not compatible in all browsers.
                svgo: false,
                // Disable `calc` optimizations, due to several issues. #16910, #16875, #17890
                calc: false,
                // Disable CSS rules sorted due to several issues #20693, https://github.com/ionic-team/ionic-framework/issues/23266 and https://github.com/cssnano/cssnano/issues/1054
                cssDeclarationSorter: false,
            },
        ],
    }));
    return postcss_1.default(postCssPlugins).process(css, {
        from: filePath,
        to: filePath.replace(path.extname(filePath), '.css'),
    });
}
function generateKey(content, browserslistData) {
    return crypto_1.createHash('sha1').update(ngPackagrVersion).update(content).update(browserslistData.join('')).digest('base64');
}
async function readCacheEntry(cachePath, key) {
    const entry = await cacache.get.info(cachePath, key);
    if (entry) {
        return {
            css: await fs_1.readFile(entry.path, 'utf8'),
            warnings: [],
        };
    }
    return undefined;
}
worker_threads_1.parentPort.on('message', async ({ signal, port, workerOptions }) => {
    try {
        const result = await processCss(workerOptions);
        port.postMessage({ ...result });
    }
    catch (error) {
        port.postMessage({ error: error.message });
    }
    finally {
        // Change the value of signal[0] to 1
        Atomics.add(signal, 0, 1);
        // Unlock the main thread
        Atomics.notify(signal, 0);
        port.close();
    }
});
//# sourceMappingURL=stylesheet-processor-worker.js.map