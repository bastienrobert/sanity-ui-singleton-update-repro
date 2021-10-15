import S from '@sanity/base/structure-builder'

const singletons = ['generalSettings', 'shopSettings']

export default [
  ...S.defaultInitialValueTemplateItems().filter(
    (doc) => !singletons.includes(doc.spec.id)
  ),
]
