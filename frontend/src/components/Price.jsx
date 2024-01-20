import styled from "styled-components";

const Price = ({item})=>{
    return <PriceDiv>{'$' + (parseInt(item.price) / 100).toLocaleString()}</PriceDiv>
}
const PriceDiv = styled.div`
        font-weight: bold;
        font-size: xx-large;
        align-self: end;
        margin-bottom: 1rem;
    `

export default Price