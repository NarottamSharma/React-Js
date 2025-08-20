import React, { useState, useEffect } from "react";

function FetchingDatausingUseEffects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setData(result.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        console.log("Fetch operation completed");
      }
    };

    fetchData();

    // Using axios alternative:
    // const fetchDataWithAxios = async () => {
    //   try {
    //     const response = await axios.get("https://dummyjson.com/products")
    //     setData(response.data)
    //   } catch (error) {
    //     console.error("Error fetching data:", error)
    //   } finally {
    //     console.log("Fetch operation completed")
    //   }
    // }
    // fetchDataWithAxios()
  }, []);

  return (
    <div>
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchingDatausingUseEffects;
