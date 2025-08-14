import { Greet } from "./components/exercise/Greet";
import { ProductInfo } from "./components/exercise/ProductInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Welcome from "./components/Welcome";

const App = () => {
    const object  = [
        {
            name:"Narottam1",
            age:22,
            place:"IND"
        },
        {
            name:"Narottam2",
            age:24,
            place:"RUS"
        },
        {
            name:"Narottam3",
            age:26,
            place:"USA"
        },
    ];
    return (
        <div>
            {/* <Header />
            <Main />
            <Footer />
            <Welcome/>
            <Greet />
            <ProductInfo /> */}
            <main>
                {object.map(({name,age,place}) => (
                    <div key={name}>
                        <h3>{name}</h3>
                        <p>Age: {age}</p>
                        <p>Place: {place}</p>
                    </div>
                ))}
            </main>
        </div>
    );
};
export default App;
