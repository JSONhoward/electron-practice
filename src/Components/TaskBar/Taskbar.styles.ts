import styled from 'styled-components'

export const StyledTaskbar = styled('ul')`
display: flex;
height: 100vh;
width:  50px;
border-right: 1px solid black;
background-color: #202020;
list-style-type: none;
flex-direction: column;
`

export const TasksLi = styled('li')<{active: boolean}>`
display: list-item;
text-align: center;
font-size: 2rem;
color: #fff;
opacity: ${({active}) => active ? 1 : .1};
cursor: pointer;
margin: 1rem 0;

&:hover {
    font-weight: bold;
}
`