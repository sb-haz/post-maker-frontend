import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AvailableTools from './components/AvailableTools';
import Features from './components/Features';

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

      <div className="content">
        <Features />
      </div>

      <Footer />

    </div>
  );
}

export default App;
