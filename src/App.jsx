import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Layout from './layout/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Disbursement from './pages/Disbursement'
import GeneralLedger from './pages/GeneralLedger'
import APAR from './pages/APAR'
import BudgetManagement from './pages/BudgetManagement'
import Collections from './pages/Collections'

// Protected Route Component
function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in (stored in sessionStorage)
    const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true'
    setIsAuthenticated(loggedIn)
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/disbursement"
        element={
          <ProtectedRoute>
            <Layout>
              <Disbursement />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/general-ledger"
        element={
          <ProtectedRoute>
            <Layout>
              <GeneralLedger />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/ap-ar"
        element={
          <ProtectedRoute>
            <Layout>
              <APAR />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/budget-management"
        element={
          <ProtectedRoute>
            <Layout>
              <BudgetManagement />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/collections"
        element={
          <ProtectedRoute>
            <Layout>
              <Collections />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
