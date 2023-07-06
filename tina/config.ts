import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID as string,
  token: process.env.TINA_TOKEN as string,

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
        ui: {
          filename: {
            readonly: true,
          },
        },
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
      indexerToken: process.env.TINA_SEARCH_TOKEN as string,
    },
  },
})
