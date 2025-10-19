import { defineField, defineType } from 'sanity'

export const tableOfContentItem = defineType({
    name: 'tableOfContentItem',
    title: 'TableOfContentItem',
    type: 'object',
    fields: [
        defineField({
            name: 'linkText',
            title: 'LinkText',
            type: 'string'
        }),
        defineField({
            name: 'sectionId',
            title: 'SectionId',
            type: 'string'
        })
    ]
})