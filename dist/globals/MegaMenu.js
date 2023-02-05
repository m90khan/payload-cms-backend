"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __importDefault(require("../fields/link"));
var MegaMenu = {
    slug: 'mega-menu',
    label: 'Mega Menu',
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
exports.default = MegaMenu;
