import * as React from 'react'

import { RootState } from '@/Store'
import { Names } from '@/Utils/mocks'
import {useSelector} from 'react-redux'

import { StyledNameList, NamesLi } from './NameList.styles'

const NameList = () => {
    const names = useSelector((state: RootState) => state.clients)

    const nameList = names.map((name: Names) => {
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
