import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import ErrorPage from './Components/ErrorPage'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
