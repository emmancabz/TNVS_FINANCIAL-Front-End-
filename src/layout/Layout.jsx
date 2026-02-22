import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function Layout({ children }) {
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f5f7]">
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isExpanded ? 'ml-[260px]' : 'ml-[72px]'
        }`}
      >
        <Header />
        <main className="flex-1 overflow-y-auto min-h-0">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
