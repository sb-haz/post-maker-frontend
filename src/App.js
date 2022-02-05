import './App.css';
import Navbar from './components/Navbar';
import AvailableTools from './components/AvailableTools';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <AvailableTools />
      </div>
    </div>
  );
}

export default App;
