import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Price from "../components/styled/Price.jsx";
import {Button, SecondaryButton} from "../components/styled/Button.jsx";
import FlexContainer from "../components/styled/FlexContainer.jsx";
import {graphql} from "relay-runtime";
import {useLazyLoadQuery, useMutation} from "react-relay";
import {useLocation} from 'react-router-dom';

function Item() {
    const ItemGetItemQuery = graphql`
        query ItemGetItemQuery($item_id: ID!) {
            getItem(item_id: $item_id) {
                amount
                description
                image
                price
                title
            }
        }

    `
    const item_id = parseInt(useLocation().pathname.split('/').pop(), 10)
    const response = useLazyLoadQuery(ItemGetItemQuery, {item_id: item_id});
    const item = response.getItem
    const outOfStock = item.amount === 0;

    const [addCartItem] = useMutation(graphql`
        mutation ItemAddToCartMutation($cartID: ID!, $itemID: ID!, $amount: Int!) {
            addToCart(cartID: $cartID, itemID: $itemID, amount: $amount)
        }
    `)

    function addToCart() {
        if (outOfStock) return false;
        addCartItem({
            variables: {
                cartID: 1,
                itemID: item_id,
                amount: 1
            }, onCompleted: (response, errors) => {
                if (!errors) {
                    // TODO: Send success message and block button (?)
                }
            },
        })
        return true
    }

    return (
        <>
            <div>
                <Link to={'/'}>Return to catalog <FontAwesomeIcon icon={faCircleArrowLeft}/></Link>
            </div>
            <FlexContainer style={{marginLeft: 500}}>
                <div style={{marginRight: 100}}>
                    <img style={{width: 500}} src={item.image} alt={`${item.title} image`}/>
                    <p style={{width: 500}}>{item.description}</p>
                </div>
                <div>
                    <h2>{item.title}</h2>
                    <Price item={item}/>
                    {outOfStock ? <span style={{color: 'red'}}>Sold out</span> :
                        <small style={{color: 'grey'}}>({item.amount} left)</small>}
                    <div className="buttons">
                        <Button disabled={outOfStock}>Buy Now</Button>
                        <SecondaryButton
                            disabled={outOfStock}
                            onClick={() => addToCart()}>
                            Add to cart
                        </SecondaryButton>
                    </div>
                </div>
            </FlexContainer>
        </>
    );
}

export default Item;