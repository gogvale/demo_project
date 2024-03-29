import {graphql} from "relay-runtime";
import {useLazyLoadQuery} from "react-relay";
import Price from "../components/styled/Price.jsx";
import FlexContainer from "../components/styled/FlexContainer.jsx";
import {SecondaryButton} from "../components/styled/Button.jsx";
import {ListGroupContainer} from "../components/styled/Cart.jsx";
import CartItem from "../components/CartItem.jsx";

function Cart() {
    const query = graphql`
        query CartGetCartQuery($cart_id: ID!){
            getCart(cartID: $cart_id) {
                subtotal
                cart_items{
                    cart_item_id
                    items_count
                    total
                    item{
                        amount
                        image
                        title
                    }
                }
            }
        }

    `
    const response = useLazyLoadQuery(query, {cart_id: 1})


    const cart = response.getCart
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
            <h1>My Cart</h1>
            <hr style={{
                color: '#009686',
                height: 1,
                background: 'gray',
                width: 100
            }}/>
            <ListGroupContainer>
                {cart.cart_items.map((cart_item) => <CartItem key={cart_item.cart_item_id} cart_item={cart_item}/>)}
            </ListGroupContainer>
            <FlexContainer style={{justifyContent: 'space-between', width: '15%', alignItems: 'center'}}>
                <SecondaryButton style={{height: '4em'}}>Checkout</SecondaryButton>
                <h1>Total: <Price item={{price: cart.subtotal}}/></h1>
            </FlexContainer>
        </div>
    );
}

export default Cart;