export default {
  title: 'Shop Settings',
  name: 'shopSettings',
  type: 'document',
  fields: [
    {
      title: 'Shopify Store URL',
      name: 'storeURL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https'],
        }),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Shop Settings',
      }
    },
  },
}
