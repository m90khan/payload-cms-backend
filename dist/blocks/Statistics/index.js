"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var backgroundColor_1 = __importDefault(require("../../fields/backgroundColor"));
var overlap_1 = __importDefault(require("../../fields/overlap"));
var stat_1 = __importDefault(require("../../fields/stat"));
var Statistics = {
    slug: 'statistics',
    labels: {
        singular: 'Statistics',
        plural: 'Statistic Blocks',
    },
    fields: [
        backgroundColor_1.default,
        overlap_1.default,
        {
            name: 'stats',
            label: 'Statistics',
            type: 'array',
            minRows: 1,
            maxRows: 3,
            fields: [
                stat_1.default,
            ],
        },
    ],
};
exports.default = Statistics;
