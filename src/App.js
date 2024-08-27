import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth';
import Booking from './pages/Booking';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register />}/>
        <Route path='/booking' element={<Booking/>}/>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
