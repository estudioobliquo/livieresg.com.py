/* eslint-disable max-len */

const titlePrefix = 'Livieres Guggiari'
const urlPrefix = 'https://livieresg.com.py/'
const topicPrefix = 'Estudio Juridico, Abogacia '

const defaultMeta = [
  { property: 'og:type', content: 'website' },
  { property: 'og:image', content: 'https://livieresg.com.py/og-image.png' },
  { name: 'author', content: 'Estudio Obliquo' },
  { name: 'copyright', content: 'LG - Livieres Guggiari | Estudio Juridico' },
]

export function enrichHead (data) {
  const result = { meta: [ ...defaultMeta ] }

  const title = data.title ? `${data.title}  | ${titlePrefix}` : titlePrefix

  result.title = title
  result.meta.push({ property: 'og:title', content: data.metaTitle || title })

  result.meta.push({ hid: 'description', name: 'description', content: data.description })
  result.meta.push({ property: 'og:description', content: data.description })

  result.meta.push({ property: 'og:url', content: urlPrefix + data.url })

  result.meta.push({ name: 'page-topic', content: topicPrefix + (data.topic ? `, ${data.topic}` : '') })

  return result
}

export const seoData = {

  '/': {
    es: enrichHead({
      url: '/',
      title: 'Inicio',
      description: 'Estudio Juridico, implementacion en varias areas de practica como; Derecho comercial y societario, Inversiones - Derecho Tributario, Sucesiones, Asuntos Administrativos y otros.',
    }),
    en: enrichHead({
      url: '/',
      title: 'Home',
      description: 'Law Firm, implementation in several areas of practice such as; Commercial and Corporate Law, Investments - Tax Law, Inheritance, Administrative Matters and others.',
    }),
    de: enrichHead({
      url: '/',
      title: 'Startseite',
      description: 'Anwaltskanzlei, Umsetzung in verschiedenen Praxisbereichen wie: Handels- und Gesellschaftsrecht, Investitionen - Steuerrecht, Erbschaft, Verwaltungsangelegenheiten und andere.',
    }),
    pt: enrichHead({
      url: '/',
      title: 'Início',
      description: 'Sociedade de Advogados, implementação em várias áreas de prática tais como; Direito Comercial e Societário, Investimentos - Direito Fiscal, Sucessões, Questões Administrativas e outras.',
    }),
  },
  '/nosotros': {
    es: enrichHead({
      url: '/nosotros',
      title: 'Nosotros',
      description: 'Desde el año 1990, el equipo de profesionales que conforma el Estudio Jurídico Livieres Guggiari presta asistencia a numerosas empresas, entidades y personas físicas, nacionales e internacionales, tanto en el área de asesoramiento legal como en el área de litigios judiciales, teniendo a la fecha una trayectoria de conducta profesional íntegra y una experiencia de más de 25 años al servicio de nuestros Clientes. ',
    }),
    en: enrichHead({
      url: '/nosotros',
      title: 'Us',
      description: 'Since 1990, Livieres Guggiaris team has provided assistance to numerous companies, organizations and individuals, national as well as international, both in the area of legal advice and in the area of litigation, having to date a path of professional ethics and an experience of more than 25 years at the service of our Clients. ',
    }),
    de: enrichHead({
      url: '/nosotros',
      title: 'Wir',
      description: 'Seit 1990 unterstützen die Antwälte der Rechtsanwaltskanzlei Livieres Guggiari zahlreiche inländische und ausländische Unternehmen, Körperschaften und Einzelpersonen, sowohl im Bereich der Rechtsberatung als auch im Bereich der Rechtsstreitigkeiten, wobei sie über eine Laufbahn voll vernünftige professionellen Verhaltens und eine Erfahrung von über 25 Jahren im Dienste unserer Mandanten verfügt.',
    }),
    pt: enrichHead({
      url: '/nosotros',
      title: 'Nós',
      description: 'Desde 1990, a equipe jurídica da Livieres Guggiari prestou assistência a inúmeras empresas, entidades e particulares, nacionais e internacionais, tanto na área de assessoria jurídica quanto na área de litígios. Temos uma larga trajetória na área profissional de mais de 25 anos ao serviço de nossos clientes.',
    }),
  },
  '/miembros': {
    es: enrichHead({
      url: '/miembros',
      title: 'Miembros',
      description: 'Abogados, Paralegales y Administracion',
    }),
    en: enrichHead({
      url: '/miembros',
      title: 'Staff',
      description: 'Lawyers, Paralegals and Administration',
    }),
    de: enrichHead({
      url: '/miembros',
      title: 'Staff',
      description: 'Anwälte, Rechtsanwaltsgehilfen und Verwaltung',
    }),
    pt: enrichHead({
      url: '/miembros',
      title: 'Equipe',
      description: 'Advogados, Paralegais e Administração',
    }),
  },
  '/areas-de-practica': {
    es: enrichHead({
      url: '/areas-de-practica',
      title: 'Áreas de Práctica',
      description: 'Derecho Mercantil y Societario, Inversiones - Derecho Fiscal, Sucesiones, Ofertas Públicas de Venta Cuestiones Administrativas, Propiedad Intelectual',
    }),
    en: enrichHead({
      url: '/areas-de-practica',
      title: 'Practice areas',
      description: 'Business and Corporate Law, Investments - Tax Law, Probate, Public Offerings Administrative Issues, Intellectual Property',
    }),
    de: enrichHead({
      url: '/areas-de-practica',
      title: 'Schwerpunkte',
      description: 'Geschäfts- und Gesellschaftsrecht, Investitionen - Steuerrecht, Erbrecht, öffentliche Angebote, Verwaltungsangelegenheiten, geistiges Eigentum',
    }),
    pt: enrichHead({
      url: '/areas-de-practica',
      title: 'Áreas de prática',
      description: 'Direito Empresarial e Corporativo, Investimentos - Direito Tributário, Sucessões, Questões administrativas de Ofertas públicas, Propiedade Intelectual',
    }),
  },
  '/blog': {
    es: enrichHead({
      url: '/blog',
      title: 'Publicaciones y Noticias',
      description: 'Desde Sociedad Constructora Chaco nos encontramos comprometidos con la comunidad , Por lo que nos encontramos constantemente realizando actividades colaborativas con las autoridades locales fomentando el desarrollo de la ciudadanía.',
    }),
    en: enrichHead({
      url: '/blog',
      title: 'Publications and News (ES)',
      description: 'At Sociedad Constructora Chaco we are committed to the community, so we are constantly carrying out collaborative activities with local authorities to promote the development of citizenship.',
    }),
    de: enrichHead({
      url: '/blog',
      title: 'Publikationen und Nachrichten (ES)',
      description: 'Die Sociedad Constructora Chaco engagiert sich für die Gemeinschaft. Deshalb führen wir ständig gemeinsame Aktivitäten mit den lokalen Behörden durch, um die Entwicklung der Bürgerschaft zu fördern.',
    }),
    pt: enrichHead({
      url: '/blog',
      title: 'Publicações e Notícias',
      description: 'Die Sociedad Constructora Chaco engagiert sich für die Gemeinschaft. Deshalb führen wir ständig gemeinsame Aktivitäten mit den lokalen Behörden durch, um die Entwicklung der Bürgerschaft zu fördern.',
    }),
  },
  '/galeria': {
    es: enrichHead({
      url: '/galeria',
      title: 'Livieres Guggiari y el Arte',
      description: 'Una colección de obras de arte seleccionadas, expuestas en nuestras oficinas, que queremos compartir contigo.',
    }),
    en: enrichHead({
      url: '/galeria',
      title: 'Livieres Guggiari Art Gallery',
      description: 'A collection of selected works of art, exhibited in our offices, that we want to share with you.',
    }),
    de: enrichHead({
      url: '/galeria',
      title: 'Livieres Guggiari und die Kunst',
      description: 'Eine Sammlung ausgewählter Kunstwerke, ausgestellt in unseren Büros, die wir mit dir teilen wollen.',
    }),
    pt: enrichHead({
      url: '/galeria',
      title: 'Galeria de Arte Livieres Guggiari',
      description: 'Uma coleção de obras de arte selecionadas, exibidas em nossos escritórios, que queremos partilhar com vocês.',
    }),
  },
}
