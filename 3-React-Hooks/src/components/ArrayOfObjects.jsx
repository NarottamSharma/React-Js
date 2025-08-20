import { useState } from "react";

function ArrayOfObjects() {
  const [movies,setMovies] = useState([
    { id: 1, title: "spiderman", rating: 4 },
    { id: 2, title: "superman", rating: 3 },
    { id: 3, title: "Antman", rating: 5 },
  ])
  
  const handleClick = ()=> setMovies(movies.map(m=>m.id===1?{...m, title:"JohnWick"}:m))

  return <div>
    {movies.map(m=>{
      return <li key={m.id}>Title: {m.title}</li>
    })}
    <button onClick={handleClick}>Change Title</button>
  </div>;
}

export default ArrayOfObjects;
