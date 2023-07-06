import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
  branch,
  clientId: '4bfc9f1d540b051c28afb4107b846352b21f10fe', // Get this from tina.io
  token: '0a419cf1d83a71a54a874356090d75a17eb9325e', // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Publicaciones',
        path: 'content/posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Título',
            isTitle: true,
            required: true,
            searchable: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Fecha',
            required: true,
          },
          {
            type: 'string',
            name: 'type',
            label: 'Tipo de publicación',
            required: true,
            options: [
              {
                label: 'Artículo',
                value: 'article',
              },
              {
                label: 'Evento',
                value: 'event',
              },
              {
                label: 'Deal',
                value: 'deal',
              },
              {
                label: 'Novedades Jurídicas',
                value: 'news',
              },
            ],
          },
          {
            type: 'string',
            name: 'author',
            label: 'Autor',
            description: 'Nombre del autor como esta en la página web (dejar en blanco si no hay)',
          },
          {
            type: 'string',
            name: 'author_email',
            label: 'Email del autor',
            description: 'Dejar en blanco si no hay autor',
          },
          {
            type: 'string',
            name: 'collaborator',
            label: 'Colaborador',
            description: 'Dejar en blanco si no hay autor',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Contenido',
            isBody: true,
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: '7dc1577de92b6b8fd9847ec7ead882b8afd015c0',
    },
  },
})
