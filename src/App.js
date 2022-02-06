import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <div className="">

      <Navbar />
      <Home />
      <Footer />

    </div>
  );
}

export default App;
