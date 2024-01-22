import { ClickableIcon, ListGroupItem } from "./styled/Cart.jsx";
import { faCircleMinus, faCirclePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { graphql, useMutation } from "react-relay";
import { useState } from "react";

function CartItem({ cart_item }) {
    const [amount, setAmount] = useState(cart_item.items_count);

    const [updateCartItem] = useMutation(
        graphql`
            mutation CartItemUpdateCartItemMutation($cartItemID: ID!, $amount: Int!) {
                updateCartItem(cartItemID: $cartItemID, amount: $amount)
            }
        `
    );

    const changeAmount = (cartItemId, newAmount) => {
        if (newAmount < 0) newAmount = 0;

        updateCartItem({
            variables: {
                cartItemID: cartItemId,
                amount: newAmount,
            },
            onCompleted: (response, errors) => {
                if (!errors) {
                    setAmount(newAmount);
                }
            },
        });
    };

    return amount > 0 && (
        <ListGroupItem key={cart_item.cart_item_id}>
      <span>
        <img src={cart_item.item.image} alt="icon" height={30} />{" "}
          {cart_item.item.title} (x{amount})
      </span>
            <span>{"$" + (parseInt(cart_item.total) / 100).toLocaleString()}</span>
            <span>
        <ClickableIcon
            onClick={() => changeAmount(cart_item.cart_item_id, amount - 1)}
            style={{ color: "#42B2A6" }}
            icon={faCircleMinus}
        />
        <ClickableIcon
            onClick={() => changeAmount(cart_item.cart_item_id, amount + 1)}
            style={{ color: "#005D53" }}
            icon={faCirclePlus}
        />
        <ClickableIcon
            onClick={() => changeAmount(cart_item.cart_item_id, 0)}
            style={{ color: "#F16600" }}
            icon={faTrashCan}
        />
      </span>
        </ListGroupItem>
    );
}

CartItem.propTypes = {
    cart_item: PropTypes.shape({
        cart_item_id: PropTypes.string.isRequired,
        item: PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }).isRequired,
        items_count: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired, // assuming total is a number
    }).isRequired,
};

export default CartItem;
