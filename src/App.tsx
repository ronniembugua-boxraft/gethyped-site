import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import Home from './pages/Home'
import ExpertisePage from './pages/ExpertisePage'
import ExpertiseDetail from './pages/ExpertiseDetail'
import WorkPage from './pages/WorkPage'
import WorkDetail from './pages/WorkDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <a className="gh-skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/expertise/:slug" element={<ExpertiseDetail />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
