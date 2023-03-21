import { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class Layout extends Component<object, object> {
  render() {
    let path;
    switch (window.location.pathname.slice(1)) {
      case '':
        path = 'Home';
        break;
      case 'about':
        path = 'About';
        break;
      default:
        path = 'Not found';
    }

    return (
      <>
        <header>
          <div className='header'>
          <Link
            to="/"
            onClick={() => {
              this.setState({});
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => {
              this.setState({});
            }}
          >
            About us
          </Link>
          </div>
          <div className="currentPage">Current page: {path}</div>
        </header>
        <main>
          <Outlet />
        </main>
      </>
    );
  }
}

export default Layout;
