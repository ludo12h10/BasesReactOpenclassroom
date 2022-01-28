import "../style/Cart.css";

function Cart() {
    const monsteraPrix = 8;
    const lierrePrix = 10;
    const fleursPrix = 15;
    return (
        <div className={"lmj-cart"}>
            <h2>Panier</h2>
            <ul>
                <li>
                    Monstera : {monsteraPrix} €
                </li>
                <li>
                    Lierre : {lierrePrix} €
                </li>
                <li>
                    Fleurs : {fleursPrix} €
                </li>
            </ul>
            Total : {monsteraPrix + lierrePrix + fleursPrix} €
        </div>)
}

export default Cart;
