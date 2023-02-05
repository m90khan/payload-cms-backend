"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Type as MediaType } from '../../collections/Media';
var backgroundColor_1 = __importDefault(require("../../fields/backgroundColor"));
var MediaGrid = {
    slug: 'media-grid',
    labels: {
        singular: 'Media Grid',
        plural: 'Media Grids',
    },
    fields: [
        backgroundColor_1.default,
        {
            name: 'content',
            label: 'Content',
            type: 'richText',
        },
        {
            name: 'media',
            label: 'Media',
            type: 'array',
            minRows: 3,
            maxRows: 12,
            fields: [
                {
                    type: 'upload',
                    name: 'media',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'content',
                    label: 'Content',
                    type: 'textarea',
                },
            ],
        },
    ],
};
exports.default = MediaGrid;
