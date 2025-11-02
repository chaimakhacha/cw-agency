// src/App.jsx
import './App.css'
import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Projects from './pages/Projects.jsx'
import Navbar from './components/Navbar.jsx'
import { LoadingScreen } from './sections/LoadingScreen.jsx'
import AdvertisingDesign from './pages/AdvertisingDesign.jsx'
import Photography from './pages/Photography.jsx'
import Communication from './pages/Communication.jsx'
import RecordingServices from './pages/RecordingServices.jsx'
import VoiceServices from './pages/VoiceRecording.jsx'
import InteriorArchi from './pages/InteriorArchi.jsx'
import DesignServices from './pages/DesignServices.jsx'
import StatsSection from './sections/StatsSection.jsx'
import WebDevelopment from './pages/WebDevelopment.jsx'
import ServicesSection from './sections/ServicesSection.jsx'
import PortfolioSection from './sections/PortfolioSection.jsx'
import TestimonialsSection from './sections/TestimonialsSection.jsx'
import AboutSection from './sections/AboutSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import FooterSection from './sections/FooterSection.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import logo from './assets/logo.png'

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      message: 'Amazing service! The team was professional and delivered beyond our expectations.',
      status: 'accepted',
      date: '2025-10-15',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael@example.com',
      message: 'Great experience working with this team. Highly recommend their services!',
      status: 'pending',
      date: '2025-10-16',
      rating: 5,
    },
  ])

  const handleCommentSubmit = (newComment) => {
    setComments([
      ...comments,
      {
        ...newComment,
        id: Date.now(),
        status: 'pending',
        date: new Date().toISOString().split('T')[0],
      },
    ])
  }

  const updateCommentStatus = (id, status) => {
    setComments(comments.map((comment) => (comment.id === id ? { ...comment, status } : comment)))
  }

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id))
  }

  const [isLoaded, setIsLoaded] = useState(false)

  // 🏠 Home Page Component
  function Home() {
    return (
      <>
        {/* 🎥 Background Video */}
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/DCGF.mp4" type="video/mp4" />
        </video>

        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        <div
          className={`min-h-screen transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } text-gray-100 relative z-10`}
        >
          <PageTransition>
            <main className="content">
              <div className="grid grid-cols-1 md:grid-cols-2 my-4 gap-6 justify-end">
                <div className="logo-container">
                  <img src={logo} alt="CW Logo" className="h-60 w-100 ml-4 mb-4 rounded-full" />
                </div>
                <div>
                  <h1 className="text-gray-100 font-bold text-3xl">Where imagination never ends.</h1>
                  <p className="text-gray-200 my-4">
                    At Creative World, we transform your vision into reality<br />
                    through innovative web development, modern design systems,<br />
                    professional photography, architectural excellence, and interior design expertise.
                  </p>
                </div>
              </div>
            </main>

            {/* Homepage sections */}
            <StatsSection />
            <ServicesSection />
            <PortfolioSection />
            <AboutSection />
            <ContactSection onCommentSubmit={handleCommentSubmit} />
            <TestimonialsSection comments={comments.filter((c) => c.status === 'accepted')} /> 
            <FooterSection />
          </PageTransition>
        </div>
      </>
    )
  }

  // 🔹 Main app render
  return (
    <div className="app-container">
      {/* Navbar always visible */}
      <Navbar />

      {/* Page transitions and routes */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/WebDevelopment" element={<WebDevelopment />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/AdvertisingDesign" element={<AdvertisingDesign />} />
          <Route path="/Photography" element={<Photography />} />
          <Route path="/Communication" element={<Communication />} />
          <Route path="/RecordingServices" element={<RecordingServices />} />
          <Route path="/VoiceServices" element={<VoiceServices />} />
          <Route path="/InteriorArchi" element={<InteriorArchi />} />
          <Route path="/DesignServices" element={<DesignServices />} />
          <Route
            path="/admin"
            element={
              <PageTransition>
                <AdminDashboard
                  comments={comments}
                  onUpdateStatus={updateCommentStatus}
                  onDelete={deleteComment}
                />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
