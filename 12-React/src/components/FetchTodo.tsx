import { use } from 'react'


/**
 * Fetches a single todo item from the JSONPlaceholder API.
 * 
 * @async
 * @function fetchData
 * @returns {Promise<Object>} A promise that resolves to the todo object containing id, userId, title, and completed properties
 * @throws {Error} Throws an error if the fetch request fails or the response is not ok
 * 
 * @example
 * ```typescript
 * const todo = await fetchData();
 * console.log(todo.title); // "delectus aut autem"
 * ```
 */
const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
};

const FetchTodo = () => {
  const data = use(fetchData());
  return <h1>{data.title}</h1>;
};

//   when we use this use in App.jsx we have to give <Suspense></Suspense>
export default FetchTodo