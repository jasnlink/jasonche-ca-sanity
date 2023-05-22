export default {
    name: 'profileCard',
    title: 'Profile Card',
    type: 'document',
    fields: [
        {
            name: 'fullName',
            title: 'Full Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'array', 
            of: [{type: 'block'}],
            validation: Rule => Rule.required()
        },
        {
            name: 'highlightedSkills',
            title: 'Highlighted skills',
            type: 'array',
            of: [
                {
                    name: 'inline',
                    type: 'object',
                    fields: [
                        {
                            title: 'Skill',
                            name: 'skill',
                            type: 'string'
                        },
                        {
                            title: 'Years of experience',
                            name: 'years',
                            type: 'number'
                        }
                    ]
                }
            ]
        },
        {
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
    ]
}