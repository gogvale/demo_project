import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {Link, Outlet} from "react-router-dom";
import {graphql} from "relay-runtime";
import {useLazyLoadQuery} from "react-relay";
import Banner from "../components/styled/Banner.jsx";
import Logo from "../components/styled/Logo.jsx";
import CartIcon from "../components/styled/CartIcon.jsx";
import Notification from "../components/styled/Notification.jsx";

function Navbar() {
    const query = graphql`
        query NavbarGetCartQuery($cart_id: ID!){
            getCart(cartID: $cart_id) {
                cart_items{
                    items_count
                }
            }
        }

    `
    const response = useLazyLoadQuery(query, {cart_id: 1})
    const cartAmount = response.getCart.cart_items.reduce((sum, item) => sum + item.items_count, 0);
    return (
        <>
            <Banner>
                <Logo to={'/'}>ShoppingDemo</Logo>
                <Link to='/cart'>
                    <CartIcon icon={faCartShopping}/>
                    {(cartAmount > 0) && <Notification>{cartAmount}</Notification>}
                </Link>
            </Banner>
            <Outlet/>
        </>
    );
}

export default Navbar;