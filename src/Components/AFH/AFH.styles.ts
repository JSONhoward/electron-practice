import styled from 'styled-components'

export const StyledAFH = styled('div')`
display: flex;
flex-direction: column;
min-height: 100vh;
width: 150px;
border-right: 1px solid black;
background-color: #202020;
list-style-type: none;
`

export const AFHLi = styled('li')`
display: list-item;
margin-bottom: 1px;
padding-left: 5px;
color: #fff;
font-size: 1.25rem;
text-shadow: 1px 1px black;
cursor: pointer;
transition: background-color .25s ease-in-out;

&:hover {
    font-weight: bold;
    background-color: #2d2d2d;
}
`