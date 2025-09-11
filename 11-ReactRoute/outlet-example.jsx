// Advanced Outlet Example - Multiple Levels of Nesting

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root Layout */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          
          {/* Blog with its own nested layout */}
          <Route path="blog" element={<BlogLayout />}>
            <Route index element={<BlogHome />} />
            <Route path="post/:id" element={<BlogPost />} />
            <Route path="categories" element={<Categories />} />
            <Route path="categories/:category" element={<CategoryPosts />} />
          </Route>
          
          {/* Dashboard with nested routes */}
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// Root Layout - appears on ALL pages
function RootLayout() {
  return (
    <div>
      <header style={{ background: '#333', color: 'white', padding: '1rem' }}>
        <nav>
          <Link to="/">Home</Link> |{' '}
          <Link to="/blog">Blog</Link> |{' '}
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>
      
      <main style={{ padding: '2rem' }}>
        <Outlet /> {/* Child routes render here */}
      </main>
      
      <footer style={{ background: '#f0f0f0', padding: '1rem' }}>
        <p>© 2025 My Website</p>
      </footer>
    </div>
  );
}

// Blog Layout - appears on all blog pages + has its own navigation
function BlogLayout() {
  return (
    <div>
      <h1>My Blog</h1>
      <nav style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
        <Link to="/blog">All Posts</Link> |{' '}
        <Link to="/blog/categories">Categories</Link> |{' '}
        <Link to="/blog/post/1">Sample Post</Link>
      </nav>
      
      <div>
        <Outlet /> {/* Blog child routes render here */}
      </div>
    </div>
  );
}

// Dashboard Layout - appears on all dashboard pages
function DashboardLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '200px', background: '#f5f5f5', padding: '1rem' }}>
        <h3>Dashboard</h3>
        <nav>
          <div><Link to="/dashboard">Overview</Link></div>
          <div><Link to="/dashboard/profile">Profile</Link></div>
          <div><Link to="/dashboard/settings">Settings</Link></div>
        </nav>
      </aside>
      
      <main style={{ flex: 1, padding: '1rem' }}>
        <Outlet /> {/* Dashboard child routes render here */}
      </main>
    </div>
  );
}

// Page Components
function Home() {
  return <h2>Welcome to the Home Page!</h2>;
}

function BlogHome() {
  return <h2>Welcome to the Blog!</h2>;
}

function BlogPost() {
  return <h2>Individual Blog Post</h2>;
}

function Categories() {
  return <h2>Blog Categories</h2>;
}

function CategoryPosts() {
  return <h2>Posts in Category</h2>;
}

function DashboardHome() {
  return <h2>Dashboard Overview</h2>;
}

function Profile() {
  return <h2>User Profile</h2>;
}

function Settings() {
  return <h2>Settings</h2>;
}

export default App;
