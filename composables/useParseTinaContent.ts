export default function useParseTinaContent (node: any) {
  if (node.type === 'root') {
    return `<div>${node.children.map(useParseTinaContent).join('')}</div>`
  }

  if (node.type === 'h2') {
    return `<h2>${node.children.map(useParseTinaContent).join('')}</h2>`
  }

  if (node.type === 'h3') {
    return `<h3>${node.children.map(useParseTinaContent).join('')}</h3>`
  }

  if (node.type === 'h4') {
    return `<h4>${node.children.map(useParseTinaContent).join('')}</h4>`
  }

  if (node.type === 'p') {
    return `<p>${node.children.map(useParseTinaContent).join('')}</p>`
  }

  if (node.type === 'text') {
    let text = node.text

    if (node.bold) {
      text = `<b>${text}</b>`
    }

    if (node.italic) {
      text = `<i>${text}</i>`
    }

    return text
  }
  // Handle any other node types as needed

  return ''
}
