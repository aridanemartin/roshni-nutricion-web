const post = {
  fields: [
    {
      name: 'title',
      required: true,
      title: 'Título del post',
      type: 'string',
    },
    {
      description:
        'haz una breve descripción de no más de dos líneas del artículo o utiliza las dos primeras líneas seguidas de 3 puntos',
      name: 'description',
      required: true,
      title:
        'Descripción (Resumen que se mostrará en la página principal y sección de blog)',
      type: 'text',
    },
    {
      description:
        'Tiempo aproximado que tardará el lector en leer el artículo (Introducir solo el número de minutos) Ejemplo ===> 3',
      name: 'timeToRead',
      required: true,
      title: 'Tiempo De Lectura',
      type: 'string',
    },
    {
      description:
        'Aquí puedes insertar tanto imágenes como texto. Recuerda que las imágenes deberán estar en modo HORIZONTAL y deben contener una descripción de aprox 125 carácteres',
      name: 'body',
      of: [
        {
          type: 'block',
        },
        {
          fields: [
            {
              name: 'image',
              options: {
                hotspot: true,
              },
              title: 'Añadir imagen',
              type: 'image',
            },
            {
              description:
                'Describe el contenido de la imagen para ayudar a mejorar la accesibilidad.',
              name: 'alt',
              title: 'Texto alternativo',
              type: 'string',
            },
          ],
          name: 'enrichedImage',
          title: 'Imagen Horizontal',
          type: 'object',
        },
        {
          fields: [
            {
              name: 'image',
              options: {
                hotspot: true,
              },
              title: 'Añadir imagen',
              type: 'image',
            },
            {
              description:
                'Describe el contenido de la imagen para ayudar a mejorar la accesibilidad.',
              name: 'alt',
              title: 'Texto alternativo',
              type: 'string',
            },
          ],
          name: 'enrichedImageVertical',
          title: 'Imagen Vertical',
          type: 'object',
        },
        {
          fields: [
            {
              name: 'url',
              title: 'YouTube Video URL',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({
                  allowRelative: false,
                  message:
                    'Por favor introduce una URL que empiece por https://www...',
                  scheme: ['https'],
                }),
            },
          ],
          name: 'youtubeVideo',
          title: 'YouTube Video',
          type: 'object',
        },
      ],
      required: true,
      title: 'POST',
      type: 'array',
    },
    {
      name: 'slug',
      options: {
        maxLength: 96,
        source: 'title',
      },
      required: true,
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },

    {
      description: 'CAMPO OBLIGATORIO',
      name: 'mainImage',
      options: {
        hotspot: true,
      },
      required: true,
      title: 'Imagen de portada',
      type: 'image',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  name: 'post',
  preview: {
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
    select: {
      author: 'author.name',
      media: 'mainImage',
      title: 'title',
    },
  },
  title: 'Post',
  type: 'document',
}

export default post
