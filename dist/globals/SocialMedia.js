"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SocialMedia = {
    slug: 'social-media',
    label: 'Social Media',
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            type: 'array',
            name: 'links',
            labels: {
                singular: 'Link',
                plural: 'Links',
            },
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'label',
                            label: 'Label',
                            type: 'text',
                            required: true,
                            admin: {
                                width: '50%',
                            },
                        },
                        {
                            name: 'url',
                            label: 'URL',
                            type: 'text',
                            required: true,
                            admin: {
                                width: '50%',
                            },
                        },
                    ],
                },
            ],
        },
    ],
};
exports.default = SocialMedia;
