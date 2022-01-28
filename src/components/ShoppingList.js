import {plantList} from "../datas/plantList";
import '../style/ShoppingList.css';

function ShoppingList() {
    const plants = [];
    plantList.forEach((p, index) => {
        plants.push(p);
    });


    return (
        <div>
            <ul>
                {plants.map((plant, index) => (
                    <li key={plant.id}>
                        {plant.category}
                    </li>
                ))}
            </ul>
            <ul  className={'lmj-plant-list'}>
                {plants.map((plant) => (
                    <li key={plant.id} className={'lmj-plant-item'}>
                        {plant.name}
                        {plant.isSpecialOffer ? <div className={'lmj-sales'}>Soldes</div> : null}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList;
