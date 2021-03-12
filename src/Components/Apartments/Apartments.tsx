import { RootState } from '@/Store'
import React from 'react'
import { useSelector } from 'react-redux'
import { StyledApartments, ApartmentsLi } from './Apartments.styles'

const Apartments = () => {
    const apartments = useSelector((state: RootState) => state.apartments)

    const apartmentList = apartments.map(apt => {
        return (
            <ApartmentsLi key={apt.id}>{apt.name}</ApartmentsLi>
        )
    })

    return (
        <StyledApartments>
            {apartmentList}
        </StyledApartments>
    )
}

export default Apartments
