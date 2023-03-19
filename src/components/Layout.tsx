import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
