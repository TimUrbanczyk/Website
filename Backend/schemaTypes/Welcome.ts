import { defineField, defineType } from 'sanity'

export const welcome = defineType({
    name: 'welcome',
    title: 'Welcome',
    type: 'document',
    fields: [
        defineField({
            name: 'headline',
            title: 'Headline',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'subHeadline',
            title: 'Sub Headline',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        }),
    ]
})