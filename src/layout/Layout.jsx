import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function Layout({ children }) {
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
          isExpanded ? 'ml-[240px]' : 'ml-[70px]'
        }`}
      >
        <Header />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
