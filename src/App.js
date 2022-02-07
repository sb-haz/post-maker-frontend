import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Home';
import QuoteTool from './QuoteTool';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quote' element={<QuoteTool />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
