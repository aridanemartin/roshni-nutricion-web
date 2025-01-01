import { createClient, groq } from 'next-sanity'
import schemas from '../schemas'

// import { Project } from '@/types/Project'

// import { Page } from '@/types/Page'

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  apiVersion: '2023-03-09',
  schema: { types: schemas },
  useCdn: false,
}

export const sanityClient = createClient(config)

export async function getPosts() {
  return sanityClient.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      description,
      author,
      timeToRead,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
    }`,
    undefined,
    { cache: 'no-store' },
  )
}

export async function getPost(slug: string) {
  return sanityClient.fetch(
    groq`*[_type == "post" && slug.current == '${slug}'][0]{
      _id,
      _createdAt,
      title,
      description,
      author,
      body,
      timeToRead,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
    }`,
    undefined,
    { cache: 'no-store' },
  )
}

export async function getPrices(tarifa) {
  return sanityClient.fetch(
    groq`*[_type == "${tarifa}"]{
      _id,
      title,
      price,
      priceDiscount,
      description,
      order,
      "icon": icon.asset->url,
    }`,
    undefined,
    { cache: 'no-store' },
  )
}
