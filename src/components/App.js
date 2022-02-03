import logo from '../logo.svg';
import '../App.css';
import Banner from "./Banner";
import Test from "./Test";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";

function App() {
    return (
        <div>
            <Banner/>
            <Cart />
            <ShoppingList />
            {/*<Test />*/}
        </div>
    );
}

export default App;
