import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
