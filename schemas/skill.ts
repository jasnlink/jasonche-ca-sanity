export default {
    name: 'skill',
    title: 'Skill',
    type: 'object',
    fields: [
        {
            title: 'Skill',
            name: 'skill',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Years of experience',
            name: 'years',
            type: 'number',
            validation: Rule => Rule.required()
        }
    ]
}