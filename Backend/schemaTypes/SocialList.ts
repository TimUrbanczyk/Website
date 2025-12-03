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
            of: [{
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
            }],
        }),
    ],
})
