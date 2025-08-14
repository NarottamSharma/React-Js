import { Greet } from "./components/exercise/Greet";
import { ProductInfo } from "./components/exercise/ProductInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Welcome from "./components/Welcome";

const App = () => {
    const num = [1, 2, 3, 4, 5, 6];
    return (
        <div>
            {/* <Header />
            <Main />
            <Footer />
            <Welcome/>
            <Greet />
            <ProductInfo /> */}
            <main>
                {num.map((singleNum) => {
                    return (
                        <ul key={singleNum}>
                            <li>{singleNum}</li>
                        </ul>
                    );
                })}
            </main>
        </div>
    );
};
export default App;
