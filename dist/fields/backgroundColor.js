"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var backgroundColor = {
    name: 'backgroundColor',
    type: 'radio',
    label: 'Background Color',
    defaultValue: 'none',
    admin: {
        layout: 'horizontal',
    },
    options: [
        {
            label: 'None',
            value: 'none',
        },
        {
            label: 'Red',
            value: 'red',
        },
        {
            label: 'Blue',
            value: 'blue',
        },
        {
            label: 'Orange',
            value: 'orange',
        },
    ],
};
exports.default = backgroundColor;
