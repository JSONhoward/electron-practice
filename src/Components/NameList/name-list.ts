//! fake api call for names
export const getNames = new Promise<any[]>((resolve) => {
    setTimeout(() => {
        resolve([{ id: 1, first: 'John', last: 'Doe' }, { id: 2, first: 'Howard', last: 'Haws' }, { id: 3, first: 'Maggie', last: 'Lane' }])
    }, 2000)
})

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
    const listItems = document.querySelectorAll('#names li')

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            if (!item.classList.contains('active-name')) {
                listItems.forEach(item2 => {
                    item2.classList.remove('active-name')
                    item2.classList.add('not-active-name')
                })
                item.classList.add('active-name')
            }
        })
    })
}