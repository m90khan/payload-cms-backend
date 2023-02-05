"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("payload/config");
var path_1 = __importDefault(require("path"));
// import Examples from './collections/Examples';
var Users_1 = __importDefault(require("./collections/Users"));
var Category_1 = __importDefault(require("./collections/Category"));
var Media_1 = __importDefault(require("./collections/Media"));
var FormSubmission_1 = __importDefault(require("./collections/FormSubmission"));
var Page_1 = __importDefault(require("./collections/Page"));
var Study_1 = __importDefault(require("./collections/Study"));
var MegaMenu_1 = __importDefault(require("./globals/MegaMenu"));
var SocialMedia_1 = __importDefault(require("./globals/SocialMedia"));
var Footer_1 = __importDefault(require("./globals/Footer"));
exports.default = (0, config_1.buildConfig)({
    // serverURL: 'http://localhost:4000',
    admin: {
        user: Users_1.default.slug,
    },
    collections: [
        Media_1.default,
        Page_1.default,
        Study_1.default,
        Category_1.default,
        FormSubmission_1.default,
        // Add Collections here
        // Examples,
        Users_1.default,
    ],
    globals: [MegaMenu_1.default, SocialMedia_1.default, Footer_1.default],
    typescript: {
        outputFile: path_1.default.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path_1.default.resolve(__dirname, 'generated-schema.graphql'),
    },
});
