import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import {
  LayoutDashboard,
  Wallet,
  BookOpen,
  FileText,
  DollarSign,
  CreditCard,
} from 'lucide-react'

const logoUrl = new URL('../assets/images/Sidebar.png', import.meta.url).href

const menuItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/disbursement', label: 'Disbursement', icon: Wallet },
  { href: '/general-ledger', label: 'General Ledger', icon: BookOpen },
  { href: '/ap-ar', label: 'AP / AR', icon: FileText },
  { href: '/budget-management', label: 'Budget Management', icon: DollarSign },
  { href: '/collections', label: 'Collections', icon: CreditCard },
]

function Sidebar({ isExpanded, toggleSidebar }) {
  return (
    <aside
      className={`bg-white border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0 z-10 transition-all duration-300 ${
        isExpanded ? 'w-[240px]' : 'w-[70px]'
      }`}
    >
      {/* Header: Logo (always visible) + Hamburger */}
      <div className="p-3 border-b border-gray-200 flex items-center justify-between gap-2 min-h-[64px]">
        <div className="flex-1 min-w-0 flex items-center overflow-hidden transition-all duration-300">
          <img
            src={logoUrl}
            alt="TNVS Finance"
            className={`object-contain transition-all duration-300 ${
              isExpanded ? 'h-[50px] w-auto max-w-[140px] object-left' : 'h-9 w-9 mx-auto object-center'
            }`}
          />
        </div>
        <button
          onClick={toggleSidebar}
          className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Toggle sidebar"
        >
          {isExpanded ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `group relative flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-50 text-primary-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                } ${!isExpanded ? 'justify-center' : ''}`
              }
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {isExpanded && <span className="whitespace-nowrap">{item.label}</span>}
              
              {/* Tooltip for collapsed state */}
              {!isExpanded && (
                <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 pointer-events-none">
                  {item.label}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
                </div>
              )}
            </NavLink>
          )
        })}
      </nav>

      {/* Footer */}
      <div className={`p-4 border-t border-gray-200 ${!isExpanded ? 'text-center' : ''}`}>
        {isExpanded ? (
          <div className="text-xs text-gray-500 text-center">
            © 2026 TNVS Finance System
          </div>
        ) : (
          <div className="text-xs text-gray-500">©</div>
        )}
      </div>
    </aside>
  )
}

export default Sidebar
