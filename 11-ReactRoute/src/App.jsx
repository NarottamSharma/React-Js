import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
          <Link to='/' style={{ marginRight: '10px' }}>Home</Link>
          <Link to='/blog' style={{ marginRight: '10px' }}>Blog</Link>
          <Link to='/blog/1'>Blog1</Link>
        </nav>
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/blog/1' element={<Blog1/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

function Home(){
  return (
    <>
      <h1>Welcome to Home Page</h1>
      <p>This is the home page of our React Router application.</p>
    </>
  );
}

function Blog(){
  return (
    <>
      This is My blog
    </>
  );
}

function Blog1(){
  const navigate = useNavigate();
  function redirect(){
    navigate('/');
  }
  return (
    <>
      This is My Blog1
      <p>Whats up</p>
      <button onClick={redirect}>To Home Page</button>
    </>
  );
}

export default App;
