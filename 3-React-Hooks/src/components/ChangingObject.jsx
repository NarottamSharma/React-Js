import React, { useState } from "react";

function ChangingObject() {
  const [movie, setMovies] = useState({
    title: "Demon Slayer",
    rating: 10,
  });
  const updateHandler = () => setMovies({ ...movie, rating: 5 });

  return (
    <div>
      <h1>Title: {movie.title}</h1>
      <p>Rating: {movie.rating}</p>
      <button onClick={updateHandler}>Update Rating</button>
    </div>
  );
}

export default ChangingObject;
