import { defineField, defineType } from 'sanity'

export const navbarItem = defineType({
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
})