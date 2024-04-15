
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home'
import Signup from './Component/Signup';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exect path='/' element={<Home />}></Route>
          <Route exect path='/signup' element={<Signup />}></Route>
        </Routes>
      </div>
    </Router>

  )
}

export default App;
