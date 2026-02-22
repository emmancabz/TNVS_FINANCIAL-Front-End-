import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Bell, X, LogOut, Settings } from 'lucide-react'

function Notifications() {
  const [isOpen, setIsOpen] = useState(false)
  const notifications = [
    { id: 1, message: 'DV-2026-044 requires your approval', time: '5 mins ago' },
    { id: 2, message: 'Budget alert: IT department over budget', time: '1 hour ago' },
    { id: 3, message: 'Collection OR-2026-045 generated', time: '2 hours ago' },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all duration-200"
      >
        <Bell className="w-5 h-5" strokeWidth={1.6} />
        {notifications.length > 0 && (
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#2ecc71] rounded-full ring-2 ring-white" />
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-card border border-gray-100 z-50 overflow-hidden transition-all duration-200">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900 text-sm">Notifications</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" strokeWidth={1.8} />
            </button>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-6 text-center text-gray-500 text-sm">No notifications</div>
            ) : (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  className="p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50/80 cursor-pointer transition-colors duration-150"
                >
                  <p className="text-sm text-gray-900 font-medium">{notif.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function formatActiveTime(ms) {
  const totalSeconds = Math.floor(ms / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  if (hours > 0) return `${hours}h ${minutes}m`
  return `${minutes}m`
}

function Header() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [profileOpen, setProfileOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [activeSince] = useState(() => Date.now())
  const [activeTime, setActiveTime] = useState('0m')
  const dropdownRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTime(formatActiveTime(Date.now() - activeSince))
    }, 1000)
    return () => clearInterval(interval)
  }, [activeSince])

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn')
    navigate('/login')
  }

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100 px-4 md:px-6 py-3 flex-shrink-0">
      <div className="flex items-center w-full gap-4 min-w-0">
        <div className="flex-1 min-w-0 max-w-sm">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" strokeWidth={1.6} />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search…"
              className="w-full pl-10 pr-4 py-2 bg-gray-50/80 border border-gray-100 rounded-full text-sm text-gray-900 placeholder:text-gray-500/70 focus:outline-none focus:border-gray-200 focus:bg-white transition-all duration-200 shadow-sm"
            />
          </div>
        </div>
        <div className="flex items-center gap-5 flex-shrink-0 ml-auto pl-4">
          <Notifications />
          <div className="w-px h-6 bg-gray-100 flex-shrink-0" aria-hidden />
          <div className="relative flex items-center gap-3 flex-shrink-0" ref={dropdownRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              onMouseEnter={() => setProfileOpen(true)}
              className="flex items-center gap-3 outline-none rounded-xl focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
            >
              <div
                className="w-10 h-10 rounded-full bg-[#2ecc71] flex items-center justify-center text-white text-sm font-semibold border-2 border-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                aria-hidden
              >
                A
              </div>
              <span className="hidden md:inline text-sm text-gray-700 font-medium">Finance Admin</span>
            </button>
            {profileOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl border border-gray-100 z-50 overflow-hidden"
                style={{
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                  animation: 'fadeSlide 0.2s ease-out',
                }}
              >
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Status</span>
                    <span className="text-xs font-medium text-[#2ecc71]">Active</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Active for <span className="font-mono font-medium text-gray-700">{activeTime}</span>
                  </p>
                  <div className="h-px bg-gray-100" />
                  <button
                    type="button"
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Settings className="w-4 h-4 text-gray-500" strokeWidth={1.6} />
                    Profile Settings
                  </button>
                  <div className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                    <span className="text-sm text-gray-700">Dark Mode</span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={darkMode}
                      onClick={() => setDarkMode(!darkMode)}
                      className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${darkMode ? 'bg-[#2ecc71]' : 'bg-gray-200'}`}
                    >
                      <span
                        className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 left-1"
                        style={{ transform: darkMode ? 'translateX(22px)' : 'translateX(0)' }}
                      />
                    </button>
                  </div>
                </div>
                <div className="p-3 pt-0">
                  <div className="h-px bg-gray-100 mb-3" />
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" strokeWidth={1.8} />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
