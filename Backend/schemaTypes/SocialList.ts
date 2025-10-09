import { defineField, defineType } from 'sanity'


export const socialList = defineType({
    name: 'socialList',
    title: 'Social List',
    type: 'document',
    fields: [
        defineField({
            name: 'socials',
            title: 'Socials',
            type: 'array',
            of: [{ type: 'social' }],
        }),
    ],
})
