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
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{
        name: 'card',
        title: 'Card',
        type: 'object',
        fields: [
          defineField({
            name: 'headline',
            title: 'Headline',
            type: 'string',
            validation: Rule => Rule.required(),
          }),
          defineField({
            name: 'subheadline',
            title: 'Sub Headline',
            type: 'string',
          }),
          defineField({
            name: 'text',
            title: 'Text',
            type: 'text',
          }),
          defineField({
            name: 'cardLink',
            title: 'CardLink',
            type: 'string'
          }),
          defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
          }),
          defineField({
            name: 'video',
            title: 'Video',
            type: 'file',
            options: {
              accept: 'video/*',
            },
          }),
        ],
        preview: {
          select: {
            title: 'headline',
            subtitle: 'sublheadline',
            media: 'image',
          },
        },
      }],
    }),
  ],
  preview: {
    select: {
      title: 'headline',
    },
  },
})
