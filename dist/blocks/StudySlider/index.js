"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var backgroundColor_1 = __importDefault(require("../../fields/backgroundColor"));
var StudySlider = {
    slug: 'study-slider',
    labels: {
        singular: 'Study Slider',
        plural: 'Study Sliders',
    },
    fields: [
        backgroundColor_1.default,
        {
            name: 'studies',
            type: 'relationship',
            relationTo: 'studies',
            hasMany: true,
            // required: true,
        },
    ],
};
exports.default = StudySlider;
