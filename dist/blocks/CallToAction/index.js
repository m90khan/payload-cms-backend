"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var backgroundColor_1 = __importDefault(require("../../fields/backgroundColor"));
var link_1 = __importDefault(require("../../fields/link"));
var CallToAction = {
    slug: 'call-to-action',
    labels: {
        singular: 'Call to Action',
        plural: 'Calls to Action',
    },
    fields: [
        backgroundColor_1.default,
        {
            name: 'content',
            type: 'richText',
            label: 'Content',
            required: true,
        },
        {
            name: 'actions',
            label: 'Actions',
            type: 'array',
            minRows: 1,
            maxRows: 2,
            fields: [
                link_1.default,
            ],
        },
    ],
};
exports.default = CallToAction;
