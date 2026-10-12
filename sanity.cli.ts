import { loadEnvConfig } from '@next/env'
import { defineCliConfig } from 'sanity/cli'

const dev = process.env.NODE_ENV !== 'production'
// eslint-disable-next-line no-console
loadEnvConfig(__dirname, dev, { error: console.error, info: () => null })

// @TODO report top-level await bug
// Using a dynamic import here as `loadEnvConfig` needs to run before this file is loaded
// const { projectId, dataset } = await import('lib/sanity.api')
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({ api: { dataset, projectId } })
