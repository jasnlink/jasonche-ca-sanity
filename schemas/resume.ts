import { FileDefinition } from "sanity";

export default<FileDefinition> {
    name: 'resume',
    title: 'Resume',
    type: 'file',
    options: {
        accept: '.pdf',
    },
    fields: [
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        }
    ],
    validation: Rule => Rule.required()
}