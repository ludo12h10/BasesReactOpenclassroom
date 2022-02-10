import sun from '../assets/sun.svg';
import water from '../assets/water.svg';

function CareScale({careType, scaleValue}) {
    const scaleType = careType === 'light' ? (<img src={sun} alt='sun-icon'/>) : (<img src={water} alt='water-icon'/>);
    const range = [1, 2, 3];

    return (
        <div onClick={() => handleClick(careType, scaleValue)}>
            {range.map((rangeElement) => scaleValue >= rangeElement ?
                <span key={rangeElement.toString()}>{scaleType}</span> : null)}
        </div>
    )
}

function handleClick(care, scale) {
    let message = "Cette plante requiert ";
    switch (scale) {
        case 1 :
            message = message + "peu ";
            break;
        case 2 :
            message = message + "modérement ";
            break;
        case 3 :
            message = message + "beaucoup ";
            break;
    }
    if (care === "water")
        message = message + "d'arosage";
    else
        message = message + "de lumière";

    alert(message);
}

export default CareScale;