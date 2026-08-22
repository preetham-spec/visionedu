import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import Campuses from './pages/Campuses'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import NeetAcademy from './pages/NeetAcademy'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Apply from './pages/Apply'
import Facilities from './pages/Facilities'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import AntiRagging from './pages/AntiRagging'
import Careers from './pages/Careers'
import Results from './pages/Results'

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campuses" element={<Campuses />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/neet-academy" element={<NeetAcademy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/anti-ragging-policy" element={<AntiRagging />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/results" element={<Results />} />
      </Routes>
      <Footer />
    </div>
  )
}
