"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var slug_1 = __importDefault(require("../fields/slug"));
var Category = {
    slug: 'categories',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        slug_1.default,
    ],
};
exports.default = Category;
