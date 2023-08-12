import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import { DocumentDefinition } from 'sanity'

export default<DocumentDefinition> {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: 'string' }),
        {
            name: 'title',
            title: 'Project title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'handle',
            title: 'Project handle',
            type: 'string',
            validation: Rule => Rule.required().regex(/[^a-zA-Z0-9-]+/, {name: 'a URL handle', invert: true})
        },
        {
            name: 'content',
            title: 'Project content',
            type: 'array', 
            of: [
                    {
                        type: 'block'
                    },
                    {
                        name: 'verticalImageGallery',
                        title: 'Vertical Image Gallery',
                        type: 'verticalImageGallery'
                    },
                    {
                        name: 'horizontalImage',
                        title: 'Horizontal Image',
                        type: 'horizontalImage',
                    }
                ],
            validation: Rule => Rule.required()
        },
        {
            name: 'githubSourceUrl',
            title: 'Github Source Link',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https']
            })
        },
        {
            name: 'liveDemoUrl',
            title: 'Live Demo Link',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https']
            })
        },
        {
            name: 'seoTitle',
            title: 'SEO title',
            type: 'string',
        },
        {
            name: 'seoDesc',
            title: 'SEO description',
            type: 'text',
        }
    ]
}