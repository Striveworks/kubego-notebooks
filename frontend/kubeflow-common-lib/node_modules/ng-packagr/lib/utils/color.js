"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = void 0;
const ansiColors = require("ansi-colors");
const tty_1 = require("tty");
const supportsColor = process.stdout instanceof tty_1.WriteStream && process.stdout.getColorDepth() > 1;
// Create a separate instance to prevent unintended global changes to the color configuration
// Create function is not defined in the typings. See: https://github.com/doowb/ansi-colors/pull/44
const colors = ansiColors.create();
exports.colors = colors;
colors.enabled = supportsColor;
``;
//# sourceMappingURL=color.js.map