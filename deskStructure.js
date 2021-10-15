import S from '@sanity/desk-tool/structure-builder'

import { Gear, ShoppingCart, Shuffle } from 'phosphor-react'

export default () =>
  S.list()
    .title('Website')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('General')
                .child(
                  S.document()
                    .id('generalSettings')
                    .schemaType('generalSettings')
                    .documentId('generalSettings')
                )
                .icon(Gear),
              S.divider(),
              S.listItem()
                .title('Shop')
                .child(
                  S.document()
                    .id('shopSettings')
                    .schemaType('shopSettings')
                    .documentId('shopSettings')
                )
                .icon(ShoppingCart),
              S.divider(),
              S.listItem()
                .title('Redirects')
                .child(S.documentTypeList('redirect').title('Redirects'))
                .icon(Shuffle),
            ])
        )
        .icon(Gear),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['generalSettings', 'shopSettings', 'redirect'].includes(
            listItem.getId()
          )
      ),
    ])
