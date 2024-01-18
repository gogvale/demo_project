import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {Link} from "react-router-dom";

function Navbar() {
    const Logo = styled.a`
        font-family: "Caveat Brush", sans-serif;
        font-size: xxx-large;
        color: white;
    `
    const Banner = styled.div`
        background-color: #20A294;
        padding: 1.5em;
        display: flex;
        justify-content: space-around;
        align-items: center;
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
    return (
        <Banner>
            <Logo href={'/'}>ShoppingDemo</Logo>
            {/*TODO: Change links to Link*/}
            <a href='/cart'>
                <CartIcon icon={faCartShopping}/>
                <Notification>12</Notification>
            </a>
        </Banner>
    );
}

export default Navbar;