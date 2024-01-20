import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleMinus, faCirclePlus, faTrashCan} from "@fortawesome/free-solid-svg-icons";

function Cart() {
    const response = {
        "data": {
            "getCart": {
                "subtotal": 135000,
                "cart_items": [
                    {
                        "cart_item_id": "1",
                        "items_count": 10,
                        "total": 120000,
                        "item": {
                            "amount": 15,
                            "image": "data:image/webp;base64,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",
                            "title": "Golf Clubs Set"
                        }
                    },
                    {
                        "cart_item_id": "2",
                        "items_count": 2,
                        "total": 15000,
                        "item": {
                            "amount": 20,
                            "image": "data:image/webp;base64,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",
                            "title": "Tennis Racket"
                        }
                    }
                ]
            }
        }
    };
    const ListGroupContainer = styled.ul`
        list-style: none;
        width: 30%;
    `
    const ListGroupItem = styled.li`
        border: 1px solid #ddd;
        margin-bottom: 5px;
        background-color: #f9f9f9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 1em;

        &:hover {
            background-color: #e0e0e0;
        }
    `
    const ClickableIcon = styled(FontAwesomeIcon)`
        padding: 0.5rem;
        font-size: 1.5rem;

        &:hover {
            cursor: pointer;
        }
    `

    const cart = response.data.getCart
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
                {cart.cart_items.map((cart_item) => <ListGroupItem key={cart_item.cart_item_id}>
                    <span><img src={cart_item.item.image} alt="icon"
                               height={30}/> {cart_item.item.title} (x{cart_item.items_count})</span>
                    <span>{'$' + (parseInt(cart_item.total) / 100).toLocaleString()}</span>
                    <span>
                        <ClickableIcon style={{color: '#42B2A6'}} icon={faCircleMinus}/>
                        <ClickableIcon style={{color: '#005D53'}} icon={faCirclePlus}/>
                        <ClickableIcon style={{color: '#F16600'}} icon={faTrashCan}/>
                    </span>
                </ListGroupItem>)}
            </ListGroupContainer>
        </div>
    );
}

export default Cart;