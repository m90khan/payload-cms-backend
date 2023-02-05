"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __importDefault(require("../../fields/link"));
var CTAGrid = {
    slug: 'cta-grid',
    labels: {
        singular: 'CTA Grid',
        plural: 'CTA Grids',
    },
    fields: [
        {
            name: 'actions',
            label: 'Actions',
            type: 'array',
            minRows: 1,
            maxRows: 4,
            fields: [
                {
                    name: 'headline',
                    label: 'Headline',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'icon',
                    label: 'Icon',
                    type: 'radio',
                    defaultValue: 'arrow',
                    options: [
                        {
                            label: 'None',
                            value: 'none',
                        },
                        {
                            label: 'Arrow',
                            value: 'arrow',
                        },
                    ],
                },
                link_1.default,
            ],
        },
    ],
};
exports.default = CTAGrid;
