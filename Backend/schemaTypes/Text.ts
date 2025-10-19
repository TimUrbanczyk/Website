import { defineField, defineType } from 'sanity'


export const text = defineType({
    name: 'textType',
    title: 'TextType',
    type: 'document',
    fields: [
        defineField({
           name: 'textName',
           title: 'Name des Textes/Aufgabe',
           type: 'string'
        }),
        defineField({
            name: 'text',
            title: 'Text',
            type: 'text'
        })
    ]
})