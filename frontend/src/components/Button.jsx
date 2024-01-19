import styled from "styled-components";

const Button = styled.button`
    color: white;
    background-color: #009686;
    padding: 1em;
    font-weight: bolder;
    font-size: medium;
    margin: 0.7rem;
    border: none;
    border-radius: 0.5rem;
    &:hover {
        cursor: pointer;
    }
`
const SecondaryButton = styled(Button)`
    background-color: #1043A1;
`
const WarningButton = styled(Button)`
    background-color: #F16600;
`
export {Button, SecondaryButton, WarningButton}