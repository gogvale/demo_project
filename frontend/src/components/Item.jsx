import Price from "./styled/Price.jsx";
import {Button} from "./styled/Button.jsx";
import GridItem from "./styled/GridItem.jsx";

const Item = ({item}) => <GridItem to={`/items/${item.item_id}`}>
    <img height={150} src={item.image} alt={item.title + ' image'}/>
    <h2>{item.title}</h2>
    <Price item={item}/>
    {
        item.amount < 1 ?
            <span style="color: red;">Out of stock</span> :
            <Button>Buy now</Button>
    }

</GridItem>

export default Item