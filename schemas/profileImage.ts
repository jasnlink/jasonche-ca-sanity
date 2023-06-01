export default {
    name: 'profileImage',
    title: 'Profile Image',
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