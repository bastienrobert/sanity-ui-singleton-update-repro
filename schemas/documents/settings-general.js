export default {
  title: 'General Settings',
  name: 'generalSettings',
  type: 'document',
  fields: [
    {
      title: 'Site Title',
      name: 'siteTitle',
      type: 'string',
      description: 'The name of your site, usually your company/brand name',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'General Settings',
      }
    },
  },
}
