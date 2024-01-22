import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ListGroupContainer = styled.ul`
        list-style: none;
        width: 30%;
    `
const ListGroupItem = styled.li`
        border: 1px solid #ddd;
        margin-bottom: 5px;
        background-color: #f9f9f9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 1em;

        &:hover {
            background-color: #e0e0e0;
        }
    `
const ClickableIcon = styled(FontAwesomeIcon)`
        padding: 0.5rem;
        font-size: 1.5rem;

        &:hover {
            cursor: pointer;
        }
    `
export {ListGroupItem,ClickableIcon,ListGroupContainer}