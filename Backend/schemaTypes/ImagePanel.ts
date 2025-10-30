import { defineField, defineType } from 'sanity'


export const imagePanel = defineType({
    name: 'imagePanel',
    title: 'ImagePanel',
    type: 'document',
    fields: [
        defineField({
            name: "directionToggler",
            title: "left/right",
            type: "boolean"
        }),
        defineField({
            name: 'imagePanelItems',
            title: 'ImagePanelItems',
            type: 'array',
            of: [
                {
                    name:'imagePanelItem',
                    title: 'ImagePanelItem',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'imagePanelItemIcon',
                            title: 'ImagePanelItemIcon',
                            type: 'image'
                        })
                    ]}
            ]
        })
    ]
})