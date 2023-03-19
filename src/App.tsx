import { Route, Routes, Link } from 'react-router-dom';
import NotFound from './pages/404';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="404" element={<NotFound />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
