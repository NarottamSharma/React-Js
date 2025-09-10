import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/1" element={<Blog1 />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
function Layout() {
  return (
    <>
      <header
        style={{
          padding: "20px",
          borderBottom: "1px solid #ccc",
          backgroundColor: "#f8f9fa",
        }}
      >
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/blog" style={{ marginRight: "10px" }}>Blog</Link>
          <Link to="/blog/1">Blog1</Link>
        </nav>
      </header>

      <main style={{ minHeight: "calc(100vh - 140px)", padding: "20px" }}>
        <Outlet />
      </main>

      <footer
        style={{
          padding: "20px",
          borderTop: "1px solid #ccc",
          backgroundColor: "#f8f9fa",
          textAlign: "center",
        }}
      >
        <p>&copy; 2024 React Router App. All rights reserved.</p>
      </footer>
    </>
  );
}
function Home() {
  return (
    <>
      <h1>Welcome to Home Page</h1>
      <p>This is the home page of our React Router application.</p>
    </>
  );
}

function Blog() {
  return <>This is My blog</>;
}

function Blog1() {
  const navigate = useNavigate();
  function redirect() {
    navigate("/");
  }
  return (
    <>
      This is My Blog1
      <p>Whats up</p>
      <button onClick={redirect}>To Home Page</button>
    </>
  );
}
const ErrorPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};
export default App;
