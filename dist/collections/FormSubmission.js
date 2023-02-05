"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormSubmission = {
    slug: 'form-submissions',
    access: {
        create: function () { return true; },
    },
    hooks: {
        afterChange: [
            function () {
                // Send an email to the client
                // with the content of the message
            },
        ],
    },
    fields: [
        {
            type: 'text',
            name: 'email',
            label: 'From Email',
            admin: {
                readOnly: true,
            },
        },
        {
            type: 'textarea',
            name: 'message',
            label: 'Message',
            admin: {
                readOnly: true,
            },
        },
        {
            type: 'text',
            name: 'source',
            label: 'Source',
            admin: {
                position: 'sidebar',
                readOnly: true,
            },
        },
    ],
};
exports.default = FormSubmission;
