import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <>
<Navbar></Navbar>
<Routes>
<Route path="/" element={<Homepage />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/service" element={<Services />} />
</Routes>
{/* <Homepage></Homepage> */}
{/* <Footer></Footer> */}
    </>
  );
}

export default App;
