import styled from "styled-components";
import {Button} from "../components/Button.jsx";
import {Link} from "react-router-dom";
import Price from "../components/Price.jsx";
import FlexContainer from "../components/FlexContainer.jsx";
import { graphql } from 'relay-runtime';
import {useLazyLoadQuery} from "react-relay";

function Catalog() {
    // console.log(`Backend API: ${import.meta.env.VITE_GRAPHQL_API_ENDPOINT}`)
    const CatalogGetItemsQuery = graphql`
        query CatalogGetItemsQuery {
            getItems{
                amount
                description
                image
                item_id
                price
                title
            }
        }
    `
    const response = useLazyLoadQuery(CatalogGetItemsQuery,{})
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
    console.log(response)
    const items = response.getItems.map((item) => <GridItem to={`/items/${item.item_id}`} key={item.item_id}>
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