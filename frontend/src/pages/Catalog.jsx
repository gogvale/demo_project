import FlexContainer from "../components/styled/FlexContainer.jsx";
import {graphql} from 'relay-runtime';
import {useLazyLoadQuery} from "react-relay";
import Item from "../components/Item.jsx";
import Filter from "../components/styled/Filter.jsx";
import GridContainer from "../components/styled/GridComponent.jsx";

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
    const response = useLazyLoadQuery(CatalogGetItemsQuery, {})
    const items = response.getItems.map((item) => <Item key={item.item_id} item={item}/>)
    return (
        <FlexContainer>
            <Filter>Filters (TODO)</Filter>
            <GridContainer>{items}</GridContainer>
        </FlexContainer>
    );
}

export default Catalog;