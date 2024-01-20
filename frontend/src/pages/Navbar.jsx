import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {Link, Outlet} from "react-router-dom";

function Navbar() {
    const Logo = styled(Link)`
        font-family: "Caveat Brush", sans-serif;
        font-size: xxx-large;
        color: white;
    `
    const Banner = styled.div`
        background-color: #20A294;
        padding: 0.3rem 2.5em;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `
    const CartIcon = styled(FontAwesomeIcon)`
        font-size: xx-large;
        color: whitesmoke;
    `
    const Notification = styled.span`
        background-color: #F16600;
        border-radius: 50%;
        color: white;
        padding: 2px 6px;
        font-weight: bold;
        position: relative;
        top: -1.5rem;
        right: 0.4rem;
    `
    const cartAmount = 10;
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