"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getOverlap = function (name) { return ({
    name: name,
    type: 'select',
    defaultValue: 'none',
    options: [
        {
            label: 'None',
            value: 'none',
        },
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
        width: '50%',
    },
}); };
var overlap = {
    type: 'row',
    fields: [
        getOverlap('topOverlap'),
        getOverlap('bottomOverlap'),
    ],
};
exports.default = overlap;
