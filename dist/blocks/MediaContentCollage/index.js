"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var backgroundColor_1 = __importDefault(require("../../fields/backgroundColor"));
var link_1 = __importDefault(require("../../fields/link"));
var MediaContentCollage = {
    slug: 'media-content-collage',
    labels: {
        singular: 'Media Content Collage',
        plural: 'Media Content Collages',
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
            name: 'enableCTA',
            label: 'Enable Call to Action',
            type: 'checkbox',
        },
        __assign(__assign({}, link_1.default), { admin: {
                condition: function (_, siblingData) { return Boolean(siblingData.enableCTA); },
            } }),
        {
            name: 'media',
            label: 'Media',
            type: 'array',
            minRows: 3,
            maxRows: 6,
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
exports.default = MediaContentCollage;
