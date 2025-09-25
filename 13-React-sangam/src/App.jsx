// import './App.css'
import Profile from './components/profile'
// import Cart from './components/cart'
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  // const name = 'Narottam';
  const [flag, setFlag] = useState(false);
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(true)

  const handleToggle = () => {
    setFlag(!flag);
  };

  const fetchListofProducts = async () => {
    try {
      const apiResponse = await fetch("https://fakestoreapi.com/products");
      const result = await apiResponse.json();
      if (result) {
        setProducts(result);
        setLoading(false);
      }

    } catch (e) {
      console.error("Error fetching products:", e);
    }
  };

  useEffect(() => {
    fetchListofProducts();
  }, []);

  if(loading) return (
    <h1>Loading Data please Wait</h1>
  )

  // useEffect(()=>{
  //   console.log('One Time Running');

  // },[])

  // useEffect(()=>{
  //   console.log('Only when Flag value changes');

  // },[flag])

  return (
    <div>
      <h1 className="font-bold bg-neutral-400 text-pink-700 text-5xl p-2 m-3 ">
        State Management, UseEffect & useContext
      </h1>
      {flag && (
        <div>
          <p>React Js Full Course</p>
        </div>
      )}
      <button
        onClick={handleToggle}
        className="p-4 bg-amber-500 cursor-pointer"
      >
        Toggle
      </button>

      <div className="flex flex-wrap gap-4 p-4 justify-center bg-neutral-200 ">
        {
          products.map((item)=> (
            <div key={item.id} className="mb-4 w-64 border-1 flex flex-col items-center rounded-xl">
              <img src={item.image} alt={item.title} className="w-32 h-32 object-cover mt-2" />
              <h3 className="font-semibold text-center">{item.title}</h3>
            </div>
          ))
        }
      </div>

        <Profile/>
      {/* <Cart name={name} age={21} city='vizag' />  */}
    </div>
  );
}

export default App;
