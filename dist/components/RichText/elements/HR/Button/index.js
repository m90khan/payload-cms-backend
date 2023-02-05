"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-extraneous-dependencies */
var react_1 = __importStar(require("react"));
var slate_1 = require("slate");
var slate_react_1 = require("slate-react");
var rich_text_1 = require("payload/components/rich-text");
var baseClass = 'rich-text-hr-button';
var insertHR = function (editor) {
    var text = { text: ' ' };
    var hr = {
        type: 'hr',
        children: [
            text,
        ],
    };
    var nodes = [hr, { children: [{ text: '' }] }];
    if (editor.blurSelection) {
        slate_1.Transforms.select(editor, editor.blurSelection);
    }
    slate_1.Transforms.insertNodes(editor, nodes);
    var currentPath = editor.selection.anchor.path[0];
    var newSelection = { anchor: { path: [currentPath + 1, 0], offset: 0 }, focus: { path: [currentPath + 1, 0], offset: 0 } };
    slate_1.Transforms.select(editor, newSelection);
    slate_react_1.ReactEditor.focus(editor);
};
var ToolbarButton = function () {
    var editor = (0, slate_react_1.useSlate)();
    var handleAddHR = (0, react_1.useCallback)(function () {
        insertHR(editor);
    }, [editor]);
    return (react_1.default.createElement(rich_text_1.ElementButton, { className: baseClass, format: "hr", onClick: handleAddHR }, "\u2014"));
};
exports.default = ToolbarButton;
