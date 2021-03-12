import { RootState } from '@/Store'
import React from 'react'
import { useSelector } from 'react-redux'
import { AFHLi, StyledAFH } from './AFH.styles'

const AFH = () => {
    const afhs = useSelector((state: RootState) => state.afhs)

    const afhList = afhs.map(afh => {
        return (
            <AFHLi key={afh.id}>{afh.name}</AFHLi>
        )
    })

    return (
        <StyledAFH>
            {afhList}
        </StyledAFH>
    )
}

export default AFH
