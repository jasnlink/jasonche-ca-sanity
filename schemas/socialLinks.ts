import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import { DocumentDefinition } from 'sanity'

export default<DocumentDefinition> {
    name: 'socialLinks',
    title: 'Social Links',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: 'string' }),
        {
            name: 'title',
            title: 'Link title',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'url',
            title: 'Link Url',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        },
        {
            name: 'socialIcon',
            title: 'Social Icon',
            type: 'image',
            options: {
                accept: '.svg',
            },
            validation: (Rule) => Rule.required()
        }
    ]
}