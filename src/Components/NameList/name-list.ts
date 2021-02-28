


export const getNames = (element: HTMLElement | null, names: any[]) => {
    if(!element) return
    names.forEach(name => {
        const node = document.createElement('li')
        const label = document.createTextNode(name.last + ', ' + name.first)
        node.appendChild(label)
        element.appendChild(node)
    })
}