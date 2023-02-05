"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var slug_1 = __importDefault(require("../fields/slug"));
var meta_1 = __importDefault(require("../fields/meta"));
var Content_1 = require("../blocks/Content");
var SingleMedia_1 = require("../blocks/SingleMedia");
var Statistics_1 = __importDefault(require("../blocks/Statistics"));
var Spacer_1 = __importDefault(require("../blocks/Spacer"));
var MediaContentCollage_1 = __importDefault(require("../blocks/MediaContentCollage"));
var StickyContent_1 = __importDefault(require("../blocks/StickyContent"));
var CallToAction_1 = __importDefault(require("../blocks/CallToAction"));
var Slider_1 = __importDefault(require("../blocks/Slider"));
var MediaStatCollage_1 = __importDefault(require("../blocks/MediaStatCollage"));
var MediaGrid_1 = __importDefault(require("../blocks/MediaGrid"));
var MediaCollage_1 = __importDefault(require("../blocks/MediaCollage"));
var StudySlider_1 = __importDefault(require("../blocks/StudySlider"));
var CTAGrid_1 = __importDefault(require("../blocks/CTAGrid"));
// export type Type = {
//   title: string;
//   featuredMedia: any;
//   previewMedia: {
//     media: any;
//   }[];
//   layout: Layout[];
//   client?: string;
//   location?: string;
//   categories?: CategoryType[];
//   slug: string;
//   meta: MetaType;
// };
var Study = {
    slug: 'studies',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: function () { return true; }, // Everyone can read Pages
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            name: 'featuredMedia',
            label: 'Featured Media',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'layout',
            label: 'Study Layout',
            type: 'blocks',
            blocks: [
                CallToAction_1.default,
                Content_1.Content,
                CTAGrid_1.default,
                SingleMedia_1.SingleMedia,
                MediaCollage_1.default,
                MediaContentCollage_1.default,
                MediaGrid_1.default,
                MediaStatCollage_1.default,
                Slider_1.default,
                Spacer_1.default,
                Statistics_1.default,
                StickyContent_1.default,
                StudySlider_1.default,
            ],
        },
        {
            name: 'previewMedia',
            label: 'Preview Media',
            labels: {
                singular: 'Media',
                plural: 'Media',
            },
            type: 'array',
            minRows: 1,
            maxRows: 3,
            fields: [
                {
                    name: 'media',
                    label: 'Media',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
        {
            name: 'client',
            label: 'Client',
            type: 'text',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'location',
            label: 'Location',
            type: 'text',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'categories',
            label: 'Categories',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: true,
            admin: {
                position: 'sidebar',
            },
        },
        slug_1.default,
        meta_1.default,
    ],
};
exports.default = Study;
