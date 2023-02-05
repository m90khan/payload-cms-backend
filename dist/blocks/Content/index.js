"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var backgroundColor_1 = __importDefault(require("../../fields/backgroundColor"));
var RedUnderline_1 = __importDefault(require("../../components/RichText/leaves/RedUnderline"));
var HR_1 = __importDefault(require("../../components/RichText/elements/HR"));
exports.Content = {
    slug: 'content',
    labels: {
        singular: 'Content',
        plural: 'Content Blocks',
    },
    fields: [
        backgroundColor_1.default,
        {
            name: 'columns',
            type: 'array',
            minRows: 1,
            labels: {
                singular: 'Column',
                plural: 'Columns',
            },
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'width',
                            label: 'Column Width',
                            type: 'select',
                            defaultValue: 'full',
                            required: true,
                            options: [
                                {
                                    label: 'One Third',
                                    value: 'oneThird',
                                },
                                {
                                    label: 'Half',
                                    value: 'half',
                                },
                                {
                                    label: 'Two Thirds',
                                    value: 'twoThirds',
                                },
                                {
                                    label: 'Full Width',
                                    value: 'full',
                                },
                            ],
                            admin: {
                                width: '50%',
                            },
                        },
                        {
                            name: 'alignment',
                            label: 'Alignment',
                            type: 'select',
                            defaultValue: 'left',
                            required: true,
                            options: [
                                {
                                    label: 'Left',
                                    value: 'left',
                                },
                                {
                                    label: 'Center',
                                    value: 'center',
                                },
                                {
                                    label: 'Right',
                                    value: 'right',
                                },
                            ],
                            admin: {
                                width: '50%',
                            },
                        },
                    ],
                },
                {
                    name: 'content',
                    type: 'richText',
                    required: true,
                    admin: {
                        leaves: [
                            RedUnderline_1.default,
                        ],
                        elements: [
                            'h2',
                            'h3',
                            'h4',
                            'h5',
                            'ul',
                            'ol',
                            HR_1.default,
                            'link',
                        ],
                    },
                },
            ],
        },
        {
            name: 'accentLine',
            label: 'Enable Accent Line',
            type: 'checkbox',
            defaultValue: false,
        },
        {
            name: 'accentLineAlignment',
            label: 'Accent Line Alignment',
            type: 'radio',
            defaultValue: 'left',
            options: [
                {
                    label: 'Left',
                    value: 'left',
                },
                {
                    label: 'Right',
                    value: 'right',
                },
            ],
            admin: {
                condition: function (_, siblingData) { return Boolean(siblingData.accentLine); },
                layout: 'horizontal',
            },
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'paddingTop',
                    label: 'Padding Top',
                    type: 'select',
                    defaultValue: 'medium',
                    options: [
                        {
                            label: 'None',
                            value: 'none',
                        },
                        {
                            label: 'Small',
                            value: 'small',
                        },
                        {
                            label: 'Medium',
                            value: 'medium',
                        },
                        {
                            label: 'Large',
                            value: 'large',
                        },
                    ],
                    admin: {
                        width: '50%',
                    },
                },
                {
                    name: 'paddingBottom',
                    label: 'Padding Bottom',
                    type: 'select',
                    defaultValue: 'medium',
                    options: [
                        {
                            label: 'None',
                            value: 'none',
                        },
                        {
                            label: 'Small',
                            value: 'small',
                        },
                        {
                            label: 'Medium',
                            value: 'medium',
                        },
                        {
                            label: 'Large',
                            value: 'large',
                        },
                    ],
                    admin: {
                        width: '50%',
                    },
                },
            ],
        },
    ],
};
exports.default = exports.Content;
