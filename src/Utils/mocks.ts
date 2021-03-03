export type Names = {
    id: number,
    first: string,
    last: string
}

type Apartments = {
    name: string
}

export const getNames = new Promise<Names[]>((resolve) => {
    setTimeout(() => {
        resolve([{ id: 1, first: 'John', last: 'Doe' }, { id: 2, first: 'Howard', last: 'Haws' }, { id: 3, first: 'Maggie', last: 'Lane' }])
    }, 2000)
})

//! fake api call for apartments
export const getApartments = new Promise<Apartments[]>((resolve) => {
    setTimeout(() => {
        resolve([{name: 'Jay\'s Place'}, {name: 'Evergreen Place'}, {name: 'Senior Villa'}])
    }, 2000)
})