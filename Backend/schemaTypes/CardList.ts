import { defineField, defineType } from 'sanity'

export const cardList = defineType({
  name: 'cardList',
  title: 'Card List',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Section Headline',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'card' }],
    }),
  ],
  preview: {
    select: {
      title: 'headline',
    },
  },
})
