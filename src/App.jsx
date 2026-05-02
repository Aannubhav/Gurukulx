import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LandingPage from './LandingPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/platform" element={<LandingPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  )
}
