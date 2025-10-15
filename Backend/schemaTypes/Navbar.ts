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
                type: 'navbarItem'
            }]

        })
    ]
})