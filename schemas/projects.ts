export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
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
                        type: 'object',
                        fields: [
                            {
                                name: 'verticalImageGallery',
                                title: 'Vertical Image Gallery',
                                type: 'array',
                                of: [
                                    {
                                        name: 'image',
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
                                ]
                            }
                        ]
                    },
                    {
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
                ],
            validation: Rule => Rule.required()
        },
    ]
}