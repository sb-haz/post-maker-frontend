import './App.css';
import Navbar from './components/Navbar';
import AvailableTools from './components/AvailableTools';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <HeroSection />
        <AvailableTools />
      </div>
    </div>
  );
}

export default App;
