import logo from './logo.svg';
import './App.css';
import Header from './components/Headerbar/Header.js';
import BoundingBox from './components/Boundingbox/Boundingbox.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <BoundingBox/>
    </div>
  );
}

export default App;