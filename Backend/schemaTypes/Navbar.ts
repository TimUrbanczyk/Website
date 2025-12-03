import { defineField, defineType } from 'sanity'

export const navbar = defineType({
    name: 'navbar',
    title: 'Navbar',
    type: 'document',
    fields: [
        defineField({
            name: 'navbarHeadline',
            title: 'NavbarHeadline',
            type: 'string'
        }),
        defineField({
            name: 'navbarItems',
            title: 'NavbarItems',
            type: 'array',
            of: [{
              name: 'navbarItem',
              title: 'NavbarItem',
              type: 'object',
              fields:  [
                defineField({
                  name: 'itemText',
                  title: 'ItemText',
                  type: 'string'
                }),
                defineField({
                  name: 'itemLink',
                  title: 'ItemLink',
                  type: 'string'
                })
              ]
            }]

        })
    ]
})