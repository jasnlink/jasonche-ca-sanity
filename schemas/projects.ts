import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
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
    ]
}