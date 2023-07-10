export default function useFormatSpanishDate (date: Date, option: number = 1): string {
  const daysOfWeek: string[] = [ 'domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado' ]
  const months: string[] = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ]

  const dayOfWeek: string = daysOfWeek[date.getDay()]
  const day: number = date.getDate()
  const month: string = months[date.getMonth()]
  const year: number = date.getFullYear()

  if (option === 2) {
    return `${day} de ${month} - ${year}`
  }

  return `${dayOfWeek} ${day} de ${month} - ${year}`
}
