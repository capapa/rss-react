import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/404';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import AddCard from './components/AddCard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="404" element={<NotFound />} />
        <Route path="about" element={<About />} />
        <Route path="addCard" element={<AddCard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
