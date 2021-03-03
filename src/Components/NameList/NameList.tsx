import React, { useEffect, useState } from 'react'
import { getNames, Names } from '../../Utils/mocks'
import { StyledNameList, NamesLi } from './NameList.styles'

const NameList = () => {
    const [names, setNames] = useState<Names[]>([])

    useEffect(() => {
        getNames.then((names: Names[]) => setNames(names))
    }, [])

    const nameList = names.map(name => {
        return (
            <NamesLi key={name.id}>{name.last}, {name.first}</NamesLi>
        )
    })

    return (
        <StyledNameList>
            {nameList}
        </StyledNameList>
    )
}

export default NameList
