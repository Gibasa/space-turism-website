import Header from './assets/components/layout/Header'
import Home from './assets/components/Home'
import Destination from './assets/components/destination/Destination'
import { HashRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/destination" element={<Destination />}></Route>
          {/* <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
          <Route path="/faq" element={<Faq/>}></Route> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
