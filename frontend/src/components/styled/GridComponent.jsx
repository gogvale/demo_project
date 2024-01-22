import styled from "styled-components";

const GridContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* Creates 4 equal-width columns */
        gap: 20px; /* Adjust the gap between columns */
        flex-grow: 1;
    `
export default GridContainer