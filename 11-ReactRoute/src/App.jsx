import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/blog' element={<Blog/>}  />
          <Route path='/blog/1' element={<Blog1/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

function Blog(){
  return (
    <>
      This is My blog
    </>
  )
}
function Blog1(){
  return (
    <>
      This is My Blog1
      <p>Whats up</p>
    </>
  )
}

export default App;
