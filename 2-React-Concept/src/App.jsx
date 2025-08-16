import { Greet } from "./components/exercise/Greet";
import { ProductInfo } from "./components/exercise/ProductInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import PropLearning from "./components/propsLearning/PropsLearm";
import { UserList } from "./components/UserList";
import Welcome from "./components/Welcome";
import Person from "./components/propsLearning/Person";
import Product from "./components/propsLearning/Product";
import Cards from "./components/propsLearning/Cards";
import Condition from "./components/conditionalRendering/Password";
import Password from "./components/conditionalRendering/Password";
import Cart from "./components/Cart";

const App = () => {
    return (
        <div>
            {/* <Header />
            <Main />
            <Footer />
            <Welcome/>
            <Greet />
            <ProductInfo />
            <UserList />
            <PropLearning/>
            <Person name="Narottam" age={22} />
            <Product name="Iphone" price={1499} />
            <Cards>
                <h1>My Card-1</h1>
                <p>This is content of for Card-1</p>
            </Cards>
            <Cards>
                <h1>My Card-2</h1>
                <p>This is content of for Card-2</p>
            </Cards>
            <Password isValid={true} />
            <ProductInfo /> */}
            <Cart />
        </div>
    );
};
export default App;
