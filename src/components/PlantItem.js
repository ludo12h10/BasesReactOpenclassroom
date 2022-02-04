import '../style/plantItem.css';
import CareScale from "./CareScale";

function PlantItem({name, cover, id, light, water}) {
    return (
        <li key={id} className='lmj-plant-item'>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}/>
            {name}
            <CareScale careType='light' scaleValue={light}/>
            <CareScale careType='water' scaleValue={water}/>
        </li>
    )
}

export default PlantItem;