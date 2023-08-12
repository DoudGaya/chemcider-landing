// /**
//  * This configuration is used to for the Sanity Studio that’s mounted on the `\pages\studio\[[...index]].tsx` route
//  * 
//  **/

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import { chemciderTheme } from './theme'
import { SanityNavbar } from './components/SanityNavbar'
import { ChemciderLogo } from './components/ChemciderLogo'

export default defineConfig({
  basePath: '/studio',
  name: "CHEMCIDER_CONTENTS_STUDIO",
  title: 'Chemcider Inc',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  studio: {
    components: {
      navbar: SanityNavbar,
      logo: ChemciderLogo
    },
  },
  plugins: [
    deskTool(),

    visionTool({defaultApiVersion: apiVersion}),

  ],

  theme: chemciderTheme
})
