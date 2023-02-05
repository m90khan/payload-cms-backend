"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __importDefault(require("../fields/link"));
var Footer = {
    slug: 'footer',
    label: 'Footer',
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: 'nav',
            label: 'Navigation',
            type: 'array',
            labels: {
                singular: 'Link',
                plural: 'Links',
            },
            fields: [
                link_1.default,
            ],
        },
    ],
};
exports.default = Footer;
