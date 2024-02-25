import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'room',
  title: 'Room',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'maxPeople',
      title: 'Max People',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'roomNumbers',
      title: 'Room Numbers',
      type: 'array',
      of: [{type: 'object', fields: [
        {name: 'number', type: 'number'},
        {name: 'unavailableDates', type: 'array', of: [{type: 'date'}]}
      ]}]
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'facilities',
      title: 'Facilities',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'facility' }] }],
    }),
  ],
})
