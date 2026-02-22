import { useState, useEffect } from 'react'
import { Plus, X, ChevronRight, Users, Building2, Truck } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const AVAILABLE_FUNDS = 1000000
const BUDGET_ITEMS = [
  { id: '1', name: 'Driver Incentives Budget', allocated: 100000, used: 80000 },
  { id: '2', name: 'Fleet Operations', allocated: 500000, used: 320000 },
  { id: '3', name: 'HR & Payroll', allocated: 300000, used: 280000 },
]

function progressColor(pct) {
  if (pct >= 90) return '#ef4444'
  if (pct >= 70) return '#eab308'
  return '#22c55e'
}

function BudgetProgressBar({ allocated, used, label }) {
  const pct = Math.min(100, (used / allocated) * 100)
  const color = progressColor(pct)
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="text-gray-500">₱{used.toLocaleString()} → {pct.toFixed(0)}% used</span>
      </div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

const DEPT_OPTIONS = [
  { id: 'fleet', label: 'Fleet', icon: Truck },
  { id: 'hr', label: 'HR', icon: Users },
  { id: 'ops', label: 'Operations', icon: Building2 },
]

function BudgetModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0)
  const [budgetName, setBudgetName] = useState('')
  const [category, setCategory] = useState('')
  const [duration, setDuration] = useState('')
  const [allocation, setAllocation] = useState('')
  const [isPercentage, setIsPercentage] = useState(false)
  const [percent, setPercent] = useState(20)
  const [order, setOrder] = useState(DEPT_OPTIONS.map((d) => d.id))
  const [shake, setShake] = useState(false)

  const allocationNum = Number(allocation) || 0
  const exceeds = allocationNum > AVAILABLE_FUNDS
  const progressPct = Math.min(100, (allocationNum / AVAILABLE_FUNDS) * 100)
  const progressColorVal = progressPct >= 100 ? '#ef4444' : progressPct >= 70 ? '#eab308' : '#22c55e'

  useEffect(() => {
    if (exceeds) {
      setShake(true)
      const t = setTimeout(() => setShake(false), 400)
      return () => clearTimeout(t)
    }
  }, [exceeds])

  const steps = ['Plan Info', 'Allocation', 'Review']
  const canNext = step === 0 ? budgetName && category && duration : step === 1 ? true : true

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.12)] w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col animate-[slideUp_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Create Budget Plan</h2>
            <button type="button" onClick={onClose} className="p-2 rounded-xl hover:bg-gray-100 text-gray-500 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-gray-500 mb-4">Total Available Funds: <span className="font-semibold text-gray-900">₱{AVAILABLE_FUNDS.toLocaleString()}</span></p>
          <div className="flex gap-2 mb-4">
            {steps.map((s, i) => (
              <button
                key={s}
                type="button"
                onClick={() => setStep(i)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${step === i ? 'bg-[#2ecc71] text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                {s}
              </button>
            ))}
          </div>
          {step === 1 && (
            <div className="mb-4">
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-1">
                <div className="h-full rounded-full transition-all duration-300" style={{ width: `${progressPct}%`, backgroundColor: progressColorVal }} />
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Allocation</span>
                <span className={exceeds ? 'text-red-600 font-medium' : ''}>{exceeds ? 'Insufficient Funds' : `${progressPct.toFixed(0)}%`}</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          {step === 0 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Budget name</label>
                <input
                  type="text"
                  value={budgetName}
                  onChange={(e) => setBudgetName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ecc71]/30 focus:border-[#2ecc71]"
                  placeholder="e.g. Q1 Fleet Budget"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Category</label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ecc71]/30 focus:border-[#2ecc71]"
                  placeholder="e.g. Operations"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Duration</label>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ecc71]/30 focus:border-[#2ecc71]"
                  placeholder="e.g. Jan - Mar 2026"
                />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium text-gray-700">Fixed Amount</span>
                <button
                  type="button"
                  role="switch"
                  onClick={() => setIsPercentage(!isPercentage)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${isPercentage ? 'bg-[#2ecc71]' : 'bg-gray-200'}`}
                >
                  <span className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm left-1 transition-transform duration-200" style={{ transform: isPercentage ? 'translateX(22px)' : 'translateX(0)' }} />
                </button>
                <span className="text-sm font-medium text-gray-700">Percentage of Revenue</span>
              </div>
              {isPercentage ? (
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{percent}%</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={percent}
                    onChange={(e) => setPercent(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-full appearance-none accent-[#2ecc71]"
                  />
                  <p className="text-xs text-gray-500 mt-1">Projection: ₱{(AVAILABLE_FUNDS * (percent / 100)).toLocaleString()}</p>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Allocation (₱)</label>
                  <input
                    type="number"
                    min="0"
                    value={allocation}
                    onChange={(e) => setAllocation(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${exceeds ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-[#2ecc71]/30 focus:border-[#2ecc71]'} ${shake ? 'animate-shake' : ''}`}
                    placeholder="0"
                  />
                  {exceeds && <p className="text-xs text-red-600 mt-1">Insufficient Funds</p>}
                </div>
              )}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Distribution Rule (priority order)</label>
                <ul className="space-y-2">
                  {order.map((id) => {
                    const dept = DEPT_OPTIONS.find((d) => d.id === id)
                    const Icon = dept?.icon || Building2
                    return (
                      <li key={id} className="flex items-center gap-3 py-2 px-3 rounded-xl bg-gray-50 border border-gray-100">
                        <Icon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">{dept?.label ?? id}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3 text-sm">
              <p><span className="text-gray-500">Budget name:</span> {budgetName || '—'}</p>
              <p><span className="text-gray-500">Category:</span> {category || '—'}</p>
              <p><span className="text-gray-500">Duration:</span> {duration || '—'}</p>
              <p><span className="text-gray-500">Allocation:</span> {isPercentage ? `${percent}% of revenue` : `₱${allocation || '0'}`}</p>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-100 flex justify-end gap-2">
          {step > 0 ? (
            <button type="button" onClick={() => setStep(step - 1)} className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors">
              Back
            </button>
          ) : null}
          {step < 2 ? (
            <button type="button" onClick={() => setStep(step + 1)} disabled={!canNext} className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium bg-[#2ecc71] text-white hover:bg-[#27ae60] disabled:opacity-50 disabled:cursor-not-allowed transition-all">
              Next <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button type="button" onClick={onClose} className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium bg-[#2ecc71] text-white hover:bg-[#27ae60] transition-all">
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function BudgetManagement() {
  const [modalOpen, setModalOpen] = useState(false)
  const [projectionData] = useState([
    { name: 'Used', value: 680000, color: '#22c55e' },
    { name: 'Remaining', value: 220000, color: '#e5e7eb' },
  ])

  return (
    <div className="p-6 md:p-8 lg:p-10 max-w-6xl mx-auto">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 tracking-tight">Budget Management</h1>
          <p className="text-gray-500">Resource Allocation Control</p>
        </div>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2ecc71] text-white text-sm font-medium hover:bg-[#27ae60] shadow-[0_2px_8px_rgba(46,204,113,0.25)] hover:shadow-[0_4px_12px_rgba(46,204,113,0.3)] transition-all duration-200 active:scale-[0.98]"
        >
          <Plus className="w-5 h-5" />
          Create Budget Plan
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Budget Consumption</h2>
          {BUDGET_ITEMS.map((item) => (
            <BudgetProgressBar
              key={item.id}
              allocated={item.allocated}
              used={item.used}
              label={item.name}
            />
          ))}
        </div>
        <div className="bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Live Projection</h2>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={projectionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={65}
                  paddingAngle={2}
                  dataKey="value"
                  nameKey="name"
                >
                  {projectionData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => [`₱${Number(v).toLocaleString()}`, '']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-gray-500 text-center">Used vs remaining</p>
        </div>
      </div>

      <BudgetModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default BudgetManagement
