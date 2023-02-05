"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var rich_text_1 = require("payload/components/rich-text");
var Button = function () { return (react_1.default.createElement(rich_text_1.LeafButton, { format: "red-underline" }, "Red Underline")); };
exports.default = Button;
