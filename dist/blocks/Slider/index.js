"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var backgroundColor_1 = __importDefault(require("../../fields/backgroundColor"));
var Slider = {
    slug: 'slider',
    labels: {
        singular: 'Slider',
        plural: 'Sliders',
    },
    fields: [
        backgroundColor_1.default,
        {
            name: 'slides',
            label: 'Slides',
            labels: {
                singular: 'Slide',
                plural: 'Slides',
            },
            type: 'array',
            minRows: 3,
            maxRows: 9,
            fields: [
                {
                    type: 'upload',
                    name: 'media',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
    ],
};
exports.default = Slider;
