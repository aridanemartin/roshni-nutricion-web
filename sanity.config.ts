import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import schemas from '@/sanity/schemas'

export default defineConfig({
  apiVersion: '2023-03-09',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  plugins: [structureTool(), visionTool()],
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  schema: { types: schemas },
  title: 'Roshni P. Dietista - Nutricionista en Las Palmas',
})
