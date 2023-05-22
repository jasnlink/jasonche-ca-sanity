import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'

const devOnlyPlugins = [getStartedPlugin()]

export const myStructure = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Profile Card')
        .child(
          S.document()
            .schemaType('profileCard')
            .documentId('profileCard')),
      ...S.documentTypeListItems().filter(listItem => !['profileCard'].includes(listItem.getId()))
    ])

export default defineConfig({
  name: 'default',
  title: 'jasonche-ca-sanity',

  projectId: 'q8h9ggfv',
  dataset: 'production',

  plugins: [deskTool({structure: myStructure,}), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

