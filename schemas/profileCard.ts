export default {
    name: 'profileCard',
    title: 'Profile Card',
    type: 'document',
    fields: [
        {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'profileImage'
        },
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
                    name: 'skill',
                    title: 'Skill',
                    type: 'skill'
                }
            ]
        },
        {
            name: 'resume',
            title: 'Resume',
            type: 'resume'
        }
    ]
}