import './App.scss'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar'
import Home from './components/home'
import People from './components/people'
import Starships from './components/starships'
import Vehicles from './components/vehicles'
import ItemDetailPage from './components/item-detail-page'
import Header from './components/header'


function App() {

  return (
    <Router>
        <div>
        <Header />
           <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/people" element={<People />} />
            <Route exact path="/starships" element={<Starships />} />
            <Route exact path="/vehicles" element={<Vehicles />} />
            <Route exact path="/people/id" element={<ItemDetailPage />} />
            <Route exact path="/starships/id" element={<ItemDetailPage />} />
            <Route exact path="/vehicles/id" element={<ItemDetailPage />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App;
