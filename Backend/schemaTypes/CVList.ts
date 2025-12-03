import { defineField, defineType } from 'sanity'

export const cvList = defineType({
  name: 'cvList',
  title: 'Lebenslauf',
  type: 'document',
  fields: [
    defineField({
      name: 'cvItemList',
      title: 'List der Einträge',
      type: 'array',
      of: [{
        name: 'cvItem',
        title:'Eintag im Lebenslauf',
        type:'object',
        fields:[
            {name: 'headline', title: 'Überschrift des Eintrages', type: 'string'},
            {name: 'date', title: 'Zeitraum des Eintrages', type: 'string'},
            {name: 'text', title: 'Beschreibung des Eintrages', type: 'text'}
        ]
      }]
    })
  ]
})

export type CvItem = {
  headline: string
  date: string
  text: string
}

export type CvList = {
  cvItemList: CvItem[]
}