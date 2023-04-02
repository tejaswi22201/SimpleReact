// import logo from './logo.svg';
import './App.css';
import Home from './Componenets/Pages/Home';
import About from './Componenets/Pages/About';
import Contact from './Componenets/Pages/Contact';
import Header from './Componenets/Layout/Header';
import PageNotFound from './Componenets/Pages/PageNotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Header/>
     <div className='App'>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<PageNotFound />} />
      </Routes>
      </div></BrowserRouter>
   
  );
}

export default App;
