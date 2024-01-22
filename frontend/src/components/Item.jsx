import Price from "./styled/Price.jsx";
import {Button} from "./styled/Button.jsx";
import GridItem from "./styled/GridItem.jsx";
import PropTypes from "prop-types";

const Item = ({item}) => <GridItem to={`/items/${item.item_id}`}>
    <img height={150} src={item.image} alt={item.title + ' image'}/>
    <h2>{item.title}</h2>
    <Price item={item}/>
    {
        item.amount < 1 ?
            <span style={{color: 'red'}}>Out of stock</span> :
            // TODO: Add a success banner message
            <Button>Buy now</Button>
    }

</GridItem>

Item.propTypes = {
    item: PropTypes.shape({
        item_id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        // Add more prop types as needed for the 'item' object
    }).isRequired,
};

export default Item