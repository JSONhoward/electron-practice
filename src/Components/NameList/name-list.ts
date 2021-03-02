export const fillNames = async (element: HTMLElement | null, names: any[]) => {
    if (!element || names.length === 0) return null
    names.forEach(name => {
        const node = document.createElement('li')
        node.classList.add('not-active-name')
        const label = document.createTextNode(name.last + ', ' + name.first)
        node.appendChild(label)
        element.appendChild(node)
    })
    return
}

export const nameSelectionActiveToggle = () => {
    const names = document.querySelectorAll('#names li')

    names.forEach(name => {
        name.addEventListener('click', () => {
            if (!name.classList.contains('active-name')) {
                names.forEach(name2 => {
                    name2.classList.remove('active-name')
                    name2.classList.add('not-active-name')
                })
                name.classList.add('active-name')
            }
        })
    })
}