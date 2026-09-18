import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import AttackPath from './pages/AttackPath'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [selectedPathId, setSelectedPathId] = useState('path-1')

  return currentPage === 'attack' ? (
    <AttackPath selectedPathId={selectedPathId} setSelectedPathId={setSelectedPathId} />
  ) : (
    <Dashboard onNavigate={setCurrentPage} selectedPathId={selectedPathId} setSelectedPathId={setSelectedPathId} />
  )
}

export default App
