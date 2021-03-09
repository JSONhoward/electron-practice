export type Names = {
    id: number,
    first: string,
    last: string
}

export type Apartments = {
    id: number,
    name: string
}

export type AFHs = {
    id: number,
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
        resolve([{id: 1, name: 'Jay\'s Place'}, {id: 2, name: 'Evergreen Place'}, {id: 3, name: 'Senior Villa'}])
    }, 2000)
})

//! fake api call for AFHs
export const getAFHs = new Promise<AFHs[]>((resolve) => {
    setTimeout(() => {
        resolve([{id: 1, name: 'Allegre Villa'}, {id: 2, name: 'The Boardwalk'}, {id: 3, name: 'Hidden Firs'}])
    }, 2000)
})