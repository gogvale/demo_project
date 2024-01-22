import Price from "./styled/Price.jsx";
import {Button} from "./styled/Button.jsx";
import GridItem from "./styled/GridItem.jsx";
import PropTypes from "prop-types";
import {useState} from "react";
import {SuccessMessage} from "./Popup.jsx";


function Item({item}) {
    const [showMessage, changeShow] = useState(false)
    return <GridItem to={`/items/${item.item_id}`}>
        <img height={150} src={item.image} alt={item.title + ' image'}/>
        <h2>{item.title}</h2>
        <Price item={item}/>
        {
            item.amount < 1 ?
                <span style={{color: 'red'}}>Out of stock</span> :
                <>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        changeShow(true)
                    }}>Buy now</Button>
                    {showMessage && (
                        <SuccessMessage
                            message={"Item bought successfully!"}
                            onClose={() => changeShow(false)}  // Pass a function reference
                        />
                    )}

                </>
        }

    </GridItem>;
}

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