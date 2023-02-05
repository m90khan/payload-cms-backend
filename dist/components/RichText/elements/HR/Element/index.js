"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./index.scss");
var baseClass = 'rich-text-hr';
var ButtonElement = function (_a) {
    var attributes = _a.attributes, children = _a.children, element = _a.element;
    return (react_1.default.createElement("div", { contentEditable: false },
        react_1.default.createElement("span", __assign({}, attributes, { className: baseClass }),
            react_1.default.createElement("hr", { className: baseClass }),
            children)));
};
exports.default = ButtonElement;
