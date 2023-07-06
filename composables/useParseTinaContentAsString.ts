export default function useParseTinaContentAsString (content: any) {
  const htmlString = useParseTinaContent(content)

  return htmlString.replace(/<\/?[^>]+(>|$)/g, '')
}
