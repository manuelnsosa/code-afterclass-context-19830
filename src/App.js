import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Home from './components/Home';
import PlantDetail from './components/PlantDetail';
import CartDetail from './components/CartDetail';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='plant/:id' element={<PlantDetail />} />
        <Route path='cart' element={<CartDetail />} />
      </Routes>
    </>
  );
}

export default App;
