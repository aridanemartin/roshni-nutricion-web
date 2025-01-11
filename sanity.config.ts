import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './src/sanity/schemas'

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  title: 'Roshni P. Dietista - Nutricionista en Las Palmas',
  apiVersion: '2023-03-09',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
})
