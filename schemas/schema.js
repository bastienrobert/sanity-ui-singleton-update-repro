import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import generalSettings from './documents/settings-general'
import shopSettings from './documents/settings-shop'
import redirect from './documents/redirect'

/*  ------------------------------------------ */
/*  Your Schema documents / modules / objects
/*  ------------------------------------------ */
export default createSchema({
  // The name of our schema
  name: 'content',

  types: schemaTypes.concat([
    /* ----------------- */
    /* 1: Document types */
    generalSettings,
    shopSettings,
    redirect,
  ]),
})
