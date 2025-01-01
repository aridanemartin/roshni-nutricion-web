const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  fields: [
    {
      name: 'title',
      title: 'Título del post',
      type: 'string',
      required: true,
    },
    {
      name: 'description',
      title:
        'Descripción (Resumen que se mostrará en la página principal y sección de blog)',
      description:
        'haz una breve descripción de no más de dos líneas del artículo o utiliza las dos primeras líneas seguidas de 3 puntos',
      type: 'text',
      required: true,
    },
    {
      name: 'timeToRead',
      title: 'Tiempo De Lectura',
      description:
        'Tiempo aproximado que tardará el lector en leer el artículo (Introducir solo el número de minutos) Ejemplo ===> 3',
      type: 'string',
      required: true,
    },
    {
      name: 'body',
      title: 'POST',
      description:
        'Aquí puedes insertar tanto imágenes como texto. Recuerda que las imágenes deberán estar en modo HORIZONTAL y deben contener una descripción de aprox 125 carácteres',
      type: 'array',
      required: true,
      of: [
        {
          type: 'block',
        },
        {
          name: 'enrichedImage',
          title: 'Imagen Horizontal',
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Añadir imagen',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Texto alternativo',
              description:
                'Describe el contenido de la imagen para ayudar a mejorar la accesibilidad.',
            },
          ],
        },
        {
          name: 'enrichedImageVertical',
          title: 'Imagen Vertical',
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Añadir imagen',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Texto alternativo',
              description:
                'Describe el contenido de la imagen para ayudar a mejorar la accesibilidad.',
            },
          ],
        },
        {
          name: 'youtubeVideo',
          type: 'object',
          title: 'YouTube Video',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'YouTube Video URL',
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['https'],
                  allowRelative: false,
                  message:
                    'Por favor introduce una URL que empiece por https://www...',
                }),
            },
          ],
        },
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      required: true,
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },

    {
      name: 'mainImage',
      title: 'Imagen de portada',
      description: 'CAMPO OBLIGATORIO',
      type: 'image',
      required: true,
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}

export default post
