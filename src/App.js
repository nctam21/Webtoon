import logo from './logo.svg';
import './App.css';
import Header from './components/headerbar/header.js';
import BoundingBox from './components/boundingbox/boundingbox.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <BoundingBox/>
    </div>
  );
}

export default App;