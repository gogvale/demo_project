import styled from "styled-components";
import PropTypes from "prop-types";

const Price = ({item})=>{
    return <PriceDiv>{'$' + (parseInt(item.price) / 100).toLocaleString()}</PriceDiv>
}
const PriceDiv = styled.div`
        font-weight: bold;
        font-size: xx-large;
        align-self: end;
        margin-bottom: 1rem;
    `
Price.propTypes = {
    item: PropTypes.shape({
        price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        // Add more prop types as needed for the 'item' object
    }).isRequired,
};

export default Price