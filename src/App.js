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
      </div>

      <div className="spacer waves-top"></div>

      <div className="content post-spacer">
        <AvailableTools />
      </div>

      <div className="spacer waves-bottom"></div>

    </div>
  );
}

export default App;
