"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
// import { Type as MediaType } from './Media';
var slug_1 = __importDefault(require("../fields/slug"));
var meta_1 = __importDefault(require("../fields/meta"));
var Content_1 = require("../blocks/Content");
var SingleMedia_1 = require("../blocks/SingleMedia");
var Statistics_1 = __importDefault(require("../blocks/Statistics"));
var Spacer_1 = __importDefault(require("../blocks/Spacer"));
var StickyContent_1 = __importDefault(require("../blocks/StickyContent"));
var CallToAction_1 = __importDefault(require("../blocks/CallToAction"));
var Slider_1 = __importDefault(require("../blocks/Slider"));
var MediaContentCollage_1 = __importDefault(require("../blocks/MediaContentCollage"));
var MediaStatCollage_1 = __importDefault(require("../blocks/MediaStatCollage"));
var MediaGrid_1 = __importDefault(require("../blocks/MediaGrid"));
var MediaCollage_1 = __importDefault(require("../blocks/MediaCollage"));
var StudySlider_1 = __importDefault(require("../blocks/StudySlider"));
var CTAGrid_1 = __importDefault(require("../blocks/CTAGrid"));
var RedHeadline_1 = __importDefault(require("../components/RichText/leaves/RedHeadline"));
var RedUnderline_1 = __importDefault(require("../components/RichText/leaves/RedUnderline"));
exports.Page = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: function () { return true; }, // Everyone can read Pages
    },
    fields: [
        {
            name: 'title',
            label: 'Page Title',
            type: 'text',
            required: true,
        },
        {
            type: 'radio',
            name: 'heroType',
            label: 'Hero Type',
            required: true,
            defaultValue: 'minimal',
            options: [
                {
                    label: 'Minimal',
                    value: 'minimal',
                },
                {
                    label: 'Content Above Media',
                    value: 'contentAboveMedia',
                },
                {
                    label: 'Content Left of Media',
                    value: 'contentLeftOfMedia',
                },
            ],
        },
        {
            name: 'heroContent',
            label: 'Hero Content',
            type: 'richText',
            required: true,
            admin: {
                leaves: [RedHeadline_1.default, RedUnderline_1.default],
            },
        },
        {
            name: 'heroMedia',
            label: 'Hero Media',
            type: 'upload',
            relationTo: 'media',
            required: true,
            admin: {
                condition: function (_, siblingData) {
                    return (siblingData === null || siblingData === void 0 ? void 0 : siblingData.heroType) === 'contentAboveMedia' ||
                        (siblingData === null || siblingData === void 0 ? void 0 : siblingData.heroType) === 'contentLeftOfMedia';
                },
            },
        },
        {
            name: 'layout',
            label: 'Page Layout',
            type: 'blocks',
            minRows: 1,
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
        meta_1.default,
        slug_1.default,
    ],
};
exports.default = exports.Page;
