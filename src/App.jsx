import Header from './assets/components/layout/Header'
import Home from './assets/components/Home'
import Destination from './assets/components/destination/Destination'
import Crew from './assets/components/crew/Crew';
import Technology from './assets/components/tecnology/Technology';
import { HashRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/destination" element={<Destination />}></Route>
          <Route path="/crew" element={<Crew />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
