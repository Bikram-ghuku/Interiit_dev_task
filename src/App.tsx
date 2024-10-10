import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Godown from './pages/Godown'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' Component={Login}/>
        <Route path='/godown' Component={Godown} />
      </Routes>
    </Router>
  )
}

export default App
