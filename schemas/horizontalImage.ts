export default {
    name: 'horizontalImage',
    title: 'Horizontal Image',
    type: 'image',
    fields: [
        {
            name: 'alt',
            title: 'Description',
            type: 'string',
            validation: Rule => Rule.required()
        }
    ]
}