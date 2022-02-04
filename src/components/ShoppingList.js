import {plantList} from "../datas/plantList";
import '../style/ShoppingList.css';
import PlantItem from "./PlantItem";

function ShoppingList() {
    const cat = [];
    plantList.forEach((p, index) => {
        cat.push(p.category);
    });
    const categories = Array.from(new Set(cat));

    return (
        <div>
            <ul>
                {categories.map((c) => (
                    <li key={c}>
                        {c}
                    </li>
                ))}
            </ul>
            <ul className={'lmj-plant-list'}>
                {plantList.map(({id, cover, name, water, light}) => (
                    <PlantItem
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList;
