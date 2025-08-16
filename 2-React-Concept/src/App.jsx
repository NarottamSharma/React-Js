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
            <ProductInfo /> */}
            <Person name="Narottam" age={22} />
            <Product name="Iphone" price={1499} />
        </div>
    );
};
export default App;
