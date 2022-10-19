import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <div className="content">

        <Routes>
        <Route path="/" element={<Main />}/>

    <Route path="/about" element={<About />}/>

        </Routes>

      </div>
    </div>
    </Router>
    
  );
}

export default App;
