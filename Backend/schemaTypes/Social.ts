import { defineField, defineType } from 'sanity'

export const social = defineType({
    name: 'social',
    title: 'Social',
    type: 'object',
    fields: [
        defineField({
            name: 'socialLink',
            title: 'SocialLink',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'socialIcon',
            title: 'SocialIcon',
            type: 'image',
            options: { hotspot: true },
        })
    ]
})