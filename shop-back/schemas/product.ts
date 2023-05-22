export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Cotton', value: 'cotton'},
          {title: 'Synthetic', value: 'synthetic'},
        ],
      },
    },
    {
      name: 'model',
      title: 'Model',
      type: 'string',
      options: {
        list: [
          {title: 'T-shirt', value: 'tshirt'},
          {title: 'Shirt', value: 'shirt'},
          {title: 'Polo', value: 'polo'},
        ],
      },
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          {title: 'Man', value: 'man'},
          {title: 'Women', value: 'women'},
        ],
      },
    },
    {
      name: 'price_list',
      title: 'Price list',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {type: 'date', name: 'date', title: 'Date'},
            {type: 'number', name: 'price', title: 'Price'},
          ],
        },
      ],
    },
  ],
}
