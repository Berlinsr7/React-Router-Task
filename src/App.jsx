
import './App.css'
import Card from './Card'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar'
import All from './All'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import FSD from './FSD'
import DataScience from './DataScience'
import Cyber from './Cyber'
import Career from './Career'

function App() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <h1>React Router Task</h1>
          <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<All/>} />
              <Route path="/fsd" element={<FSD/>} />
              <Route path="/datascience" element={<DataScience/>} />
              <Route path="/cyber" element={<Cyber/>} />
              <Route path="/career" element={<Career/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>      
    </>
    
  )
}

export default App
