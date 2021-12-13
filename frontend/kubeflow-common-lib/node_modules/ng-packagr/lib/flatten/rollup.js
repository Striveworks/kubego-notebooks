"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollupBundleFile = void 0;
const rollup = require("rollup");
const plugin_node_resolve_1 = require("@rollup/plugin-node-resolve");
const sourcemaps = require("rollup-plugin-sourcemaps");
const commonJs = require("@rollup/plugin-commonjs");
const rollupJson = require("@rollup/plugin-json");
const log = require("../utils/log");
const umd_module_id_strategy_1 = require("./umd-module-id-strategy");
const path = require("path");
/** Runs rollup over the given entry file, writes a bundle file. */
async function rollupBundleFile(opts) {
    log.debug(`rollup (v${rollup.VERSION}) ${opts.entry} to ${opts.dest} (${opts.format})`);
    // Create the bundle
    const bundle = await rollup.rollup({
        context: 'this',
        external: moduleId => isExternalDependency(moduleId, opts.format),
        inlineDynamicImports: false,
        cache: opts.cache,
        input: opts.entry,
        plugins: [
            // @ts-ignore
            rollupJson(),
            // @ts-ignore
            plugin_node_resolve_1.default(),
            // @ts-ignore
            commonJs(),
            // @ts-ignore
            sourcemaps(),
            { transform: opts.transform },
        ],
        onwarn: warning => {
            if (typeof warning === 'string') {
                log.warn(warning);
            }
            else {
                if (warning.code === 'THIS_IS_UNDEFINED') {
                    return;
                }
                log.warn(warning.message);
            }
        },
        preserveSymlinks: true,
        // Disable treeshaking when generating bundles
        // see: https://github.com/angular/angular/pull/32069
        treeshake: false,
    });
    // Output the bundle to disk
    await bundle.write({
        name: opts.moduleName,
        format: opts.format,
        amd: opts.amd,
        file: opts.dest,
        banner: '',
        globals: moduleId => umd_module_id_strategy_1.umdModuleIdStrategy(moduleId, opts.umdModuleIds || {}),
        sourcemap: true,
    });
    return bundle.cache;
}
exports.rollupBundleFile = rollupBundleFile;
function isExternalDependency(moduleId, format) {
    // more information about why we don't check for 'node_modules' path
    // https://github.com/rollup/rollup-plugin-node-resolve/issues/110#issuecomment-350353632
    if (moduleId.startsWith('.') || moduleId.startsWith('/') || path.isAbsolute(moduleId)) {
        // if it's either 'absolute', marked to embed, starts with a '.' or '/' or is the umd bundle and is tslib
        return false;
    }
    if (format === 'umd' && moduleId.startsWith('tslib')) {
        return false;
    }
    return true;
}
//# sourceMappingURL=rollup.js.map