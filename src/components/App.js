import logo from '../logo.svg';
import '../App.css';
import Banner from "./Banner";
import Test from "./Test";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";

function App() {
    return (
        <div>
            <Banner/>
            <Cart />
            <ShoppingList />
            <Footer/>
            {/*<Test />*/}
        </div>
    );
}

export default App;
