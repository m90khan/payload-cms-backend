"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Type as MediaType } from '../../collections/Media';
var overlap_1 = __importDefault(require("../../fields/overlap"));
var stat_1 = __importDefault(require("../../fields/stat"));
var MediaStatCollage = {
    slug: 'media-stat-collage',
    labels: {
        singular: 'Media Stat Collage',
        plural: 'Media Stat Collages',
    },
    fields: [
        overlap_1.default,
        {
            name: 'stats',
            label: 'Statistics',
            type: 'array',
            minRows: 1,
            maxRows: 3,
            fields: [stat_1.default],
        },
        {
            name: 'media',
            label: 'Media',
            type: 'array',
            minRows: 3,
            maxRows: 4,
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
exports.default = MediaStatCollage;
