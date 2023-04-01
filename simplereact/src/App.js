// import logo from './logo.svg';
import './App.css';
import Home from './Componenets/Pages/Home';
import About from './Componenets/Pages/About';
import Contact from './Componenets/Pages/Contact';
import Header from './Componenets/Layout/Header';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
