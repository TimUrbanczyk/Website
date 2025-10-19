import { defineField, defineType } from 'sanity'

export const tableOfContent = defineType({
    name: 'tableOfContent',
    title: 'TableOfContent',
    type: 'document',
    fields:  [
      defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string'
      }),
      defineField({
          name: 'contents',
          title: 'Contents',
          type: 'array',
          of: [{
              type: 'tableOfContentItem'
          }]
      })
    ]
})