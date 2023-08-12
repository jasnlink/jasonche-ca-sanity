import { ObjectDefinition } from "sanity";

export default<ObjectDefinition> {
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
}