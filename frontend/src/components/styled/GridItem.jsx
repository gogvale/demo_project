import styled from "styled-components";
import {Link} from "react-router-dom";

const GridItem = styled(Link)`
        border: 1px solid #ccc;
        padding: 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 25rem;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        color: #072863;

        &:hover {
            box-shadow: 0 5px 7px rgba(0, 0, 0, 0.3);
        }
    `
export default GridItem