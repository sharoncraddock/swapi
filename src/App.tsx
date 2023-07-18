import './App.scss'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/home';
import People from './components/people';
import Starships from './components/starships';
import Vehicles from './components/vehicles';


function App() {

  return (
    <Router>
        <div>
          <Navbar />

           <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/people" element={<People />} />
            <Route exact path="/starships" element={<Starships />} />
            <Route exact path="/vehicles" element={<Vehicles />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App;
