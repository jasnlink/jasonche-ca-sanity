import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {media} from 'sanity-plugin-media'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'


const devOnlyPlugins = [getStartedPlugin()]

export const myStructure = (S, context) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
      .title('Profile Card')
      .child(
        S.document()
        .schemaType('profileCard')
        .documentId('profileCard')),
        orderableDocumentListDeskItem({
          type: 'projects',
          title: 'Projects',
          S,
          context
        }),
    ])

export default defineConfig({
  name: 'default',
  title: 'jasonche-ca-sanity',

  projectId: 'q8h9ggfv',
  dataset: 'production',

  plugins: [deskTool({structure: myStructure,}), visionTool(), media(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

