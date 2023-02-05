"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.xxl = exports.xl = exports.l = exports.m = exports.s = exports.xs = void 0;
var breakpoints_1 = __importDefault(require("../breakpoints"));
exports.xs = "@media(max-width: ".concat(breakpoints_1.default.xs, "px)");
exports.s = "@media(max-width: ".concat(breakpoints_1.default.s, "px)");
exports.m = "@media(max-width: ".concat(breakpoints_1.default.m, "px)");
exports.l = "@media(max-width: ".concat(breakpoints_1.default.l, "px)");
exports.xl = "@media(max-width: ".concat(breakpoints_1.default.xl, "px)");
exports.xxl = "@media(max-width: ".concat(breakpoints_1.default.xxl, "px)");
exports.default = {
    xs: exports.xs,
    s: exports.s,
    m: exports.m,
    l: exports.l,
    xl: exports.xl,
    xxl: exports.xxl,
};
