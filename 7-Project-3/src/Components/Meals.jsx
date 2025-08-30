import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../style.css";

function Meals() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        // const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        // const data = await res.json();
        // console.log(data.meals);
        const res = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
        console.log(res.data.meals);
        setItems(res.data.meals);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };
    fetchMeals();
  }, []);
  const itemList = items.map(({strMeal,strMealThumb,idMeal})=>{
    return (
      <section key={idMeal} className="card">
        <img src={strMealThumb} alt={strMeal} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    )
  })
  return <div className="items-container" >{itemList}</div>;
}

export default Meals;
