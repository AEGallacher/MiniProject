import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import NavTest from './components/NavTest.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import AppOrig from './components/AppOrig.jsx';

function App() {

  return (
    <>
    <div>
      <BrowserRouter>
        <Nav/>
        {/* <NavTest/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AppOrig' element={<AppOrig />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
