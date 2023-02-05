"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var formatSlug_1 = __importDefault(require("../utilities/formatSlug"));
var slug = {
    name: 'slug',
    label: 'Slug',
    type: 'text',
    admin: {
        position: 'sidebar',
    },
    hooks: {
        beforeValidate: [
            (0, formatSlug_1.default)('title'),
        ],
    },
};
exports.default = slug;
