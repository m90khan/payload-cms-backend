"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Spacer = {
    slug: 'spacer',
    labels: {
        singular: 'Spacer',
        plural: 'Spacers',
    },
    fields: [
        {
            name: 'size',
            label: 'Size',
            type: 'radio',
            required: true,
            defaultValue: 'medium',
            options: [
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
                layout: 'horizontal',
            },
        },
    ],
};
exports.default = Spacer;
