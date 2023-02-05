"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StickyContent = {
    slug: 'sticky-content',
    labels: {
        singular: 'Sticky Content Block',
        plural: 'Sticky Content Blocks',
    },
    fields: [
        {
            name: 'sections',
            label: 'Sections',
            type: 'array',
            minRows: 2,
            maxRows: 8,
            fields: [
                {
                    type: 'text',
                    name: 'label',
                    label: 'Label',
                    required: true,
                },
                {
                    type: 'textarea',
                    name: 'description',
                    label: 'Description',
                    required: true,
                },
            ],
        },
    ],
};
exports.default = StickyContent;
