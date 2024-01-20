import styled from "styled-components";
import {Button, SecondaryButton} from "../components/Button.jsx";
import {Link} from "react-router-dom";
import Price from "../components/Price.jsx";
import FlexContainer from "../components/FlexContainer.jsx";

function Catalog() {
    const response = {
        "data": {
            "getItems": [
                {
                    "item_id": "1",
                    "image": "https://i.imgur.com/abcdefgh.jpg",
                    "title": "Tennis Racket",
                    "price": 7500,
                    "amount": 20
                },
                {
                    "item_id": "2",
                    "image": "https://i.imgur.com/ijklmnop.jpg",
                    "title": "Running Shoes",
                    "price": 5000,
                    "amount": 30
                },
                {
                    "item_id": "3",
                    "image": "https://i.imgur.com/qrstuvwx.jpg",
                    "title": "Golf Clubs Set",
                    "price": 12000,
                    "amount": 15
                },
                {
                    "item_id": "4",
                    "image": "https://i.imgur.com/yzabcd1.jpg",
                    "title": "Basketball Jersey",
                    "price": 3500,
                    "amount": 25
                },
                {
                    "item_id": "5",
                    "image": "https://i.imgur.com/efghij2.jpg",
                    "title": "Cycling Helmet",
                    "price": 2500,
                    "amount": 40
                },
                {
                    "item_id": "6",
                    "image": "https://i.imgur.com/klmnop3.jpg",
                    "title": "Yoga Mat",
                    "price": 3000,
                    "amount": 10
                },
                {
                    "item_id": "7",
                    "image": "https://i.imgur.com/qrstuv4.jpg",
                    "title": "Tennis Balls (Pack of 3)",
                    "price": 800,
                    "amount": 50
                },
                {
                    "item_id": "8",
                    "image": "https://i.imgur.com/wxyzab5.jpg",
                    "title": "Football Cleats",
                    "price": 6000,
                    "amount": 20
                },
                {
                    "item_id": "9",
                    "image": "https://i.imgur.com/efghij6.jpg",
                    "title": "Swimming Goggles",
                    "price": 1800,
                    "amount": 30
                },
                {
                    "item_id": "10",
                    "image": "https://i.imgur.com/ijklmn7.jpg",
                    "title": "Baseball Glove",
                    "price": 4500,
                    "amount": 15
                },
                {
                    "item_id": "11",
                    "image": "https://i.imgur.com/qrstuv8.jpg",
                    "title": "Hiking Backpack",
                    "price": 9000,
                    "amount": 10
                },
                {
                    "item_id": "12",
                    "image": "https://i.imgur.com/wxyzab9.jpg",
                    "title": "Tennis Shoes",
                    "price": 5500,
                    "amount": 25
                }
            ]
        }
    }
    const GridContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* Creates 4 equal-width columns */
        gap: 20px; /* Adjust the gap between columns */
        flex-grow: 1;
    `

    const GridItem = styled(Link)`
        border: 1px solid #ccc;
        padding: 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 25rem;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        color: #072863;

        &:hover {
            box-shadow: 0 5px 7px rgba(0, 0, 0, 0.3);
        }
    `
    const Filter = styled.div`
        border: 1px solid #ccc;
        padding: 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 25rem;
        border-radius: 8px;
        color: #072863;
        margin-right: 3em;
        width: 15em;
    `

    const items = response.data.getItems.map((item) => <GridItem to={`/items/${item.item_id}`} key={item.item_id}>
            <img height={150} src={item.image} alt={item.title + ' image'}/>
            <h2>{item.title}</h2>
            <Price item={item}/>
            {
                item.amount < 1 ?
                    <span style="color: red;">Out of stock</span> :
                    <Button>Buy now</Button>
            }

        </GridItem>
    )
    return (
        <FlexContainer>
            <Filter>Filters (TODO)</Filter>
            <GridContainer>{items}</GridContainer>
        </FlexContainer>
    );
}

export default Catalog;