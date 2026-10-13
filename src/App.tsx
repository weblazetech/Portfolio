import React, { useState, useEffect } from 'react'
import { WorkPage } from './pages/WorkPage'
import { HomePage } from './pages/HomePage'

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Both / and /work serve the full WebBlaze website
  if (currentPath === '/work' || currentPath === '/work/') {
    return <WorkPage />
  }

  return <HomePage />
}

export default App
