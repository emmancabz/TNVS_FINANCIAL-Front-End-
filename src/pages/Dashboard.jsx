import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { Users, Clock, Receipt, Wallet, Wrench } from 'lucide-react'

const BOUNDARY_DATA = [
  { name: 'Mon', amount: 98000 },
  { name: 'Tue', amount: 112000 },
  { name: 'Wed', amount: 105000 },
  { name: 'Thu', amount: 125000 },
  { name: 'Fri', amount: 118000 },
  { name: 'Sat', amount: 132000 },
  { name: 'Sun', amount: 125000 },
]

const MONTHLY_EXPENSES_DATA = [
  { month: 'Jan', amount: 2800000 },
  { month: 'Feb', amount: 3100000 },
  { month: 'Mar', amount: 2950000 },
  { month: 'Apr', amount: 3200000 },
  { month: 'May', amount: 3050000 },
  { month: 'Jun', amount: 3350000 },
]

const CATEGORY_DATA = [
  { name: 'Fuel', value: 125000, color: '#22c55e' },
  { name: 'Payroll', value: 720000, color: '#3b82f6' },
  { name: 'Utilities', value: 32000, color: '#eab308' },
  { name: 'Office', value: 12500, color: '#6b7280' },
]

const CASH_FLOW_DATA = [
  { day: '1', in: 45000, out: 32000 },
  { day: '5', in: 125000, out: 98000 },
  { day: '10', in: 118000, out: 105000 },
  { day: '15', in: 132000, out: 125000 },
  { day: '20', in: 128000, out: 110000 },
]

const kpis = [
  { label: 'Total Drivers Remitted', value: '42', icon: Users, color: 'text-primary-600', bg: 'bg-primary-50' },
  { label: 'Pending Remittances', value: '₱450K', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
  { label: 'Total Expenses This Month (company only)', value: '₱2.98M', icon: Receipt, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Available Budget Summary', value: '₱1.6M', icon: Wallet, color: 'text-green-600', bg: 'bg-green-50' },
]

function Dashboard() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">TNVS Financial Management System</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {kpis.map((kpi) => {
          const Icon = kpi.icon
          return (
            <div
              key={kpi.label}
              className={`${kpi.bg} rounded-xl p-4 md:p-6 border border-gray-200`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-8 h-8 ${kpi.color}`} />
              </div>
              <p className="text-xl md:text-2xl font-bold text-gray-900">{kpi.value}</p>
              <p className="text-sm text-gray-600 mt-1">{kpi.label}</p>
            </div>
          )
        })}
      </div>

      {/* Charts - responsive wrappers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 overflow-hidden">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Total Boundary Collected</h2>
          <div className="h-[220px] w-full min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={BOUNDARY_DATA}>
                <defs>
                  <linearGradient id="boundaryGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `₱${(v / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(v) => [`₱${Number(v).toLocaleString()}`, 'Amount']} />
                <Area type="monotone" dataKey="amount" stroke="#16a34a" fill="url(#boundaryGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 overflow-hidden">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Monthly Expenses</h2>
          <p className="text-xs text-gray-500 mb-4">Company only — Fuel, Payroll, Utilities, Office (excl. driver-funded maintenance)</p>
          <div className="h-[220px] w-full min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MONTHLY_EXPENSES_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `₱${(v / 1000000).toFixed(1)}M`} />
                <Tooltip formatter={(v) => [`₱${Number(v).toLocaleString()}`, 'Amount']} />
                <Bar dataKey="amount" fill="#16a34a" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 overflow-hidden">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Category Breakdown</h2>
          <p className="text-xs text-gray-500 mb-4">Company expenses only</p>
          <div className="h-[260px] w-full min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={CATEGORY_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {CATEGORY_DATA.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => [`₱${Number(v).toLocaleString()}`, 'Amount']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 overflow-hidden">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Cash Flow Overview</h2>
          <div className="h-[260px] w-full min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={CASH_FLOW_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `₱${(v / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(v) => [`₱${Number(v).toLocaleString()}`, '']} />
                <Legend />
                <Line type="monotone" dataKey="in" stroke="#16a34a" strokeWidth={2} dot={{ r: 4 }} name="In" />
                <Line type="monotone" dataKey="out" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} name="Out" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl border border-amber-200 p-4 md:p-6 overflow-hidden bg-amber-50/30">
          <h2 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-amber-600" />
            Driver Maintenance Overview
          </h2>
          <p className="text-xs text-gray-600 mb-4">Record keeping only — driver-funded, not company expense</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex justify-between sm:block"><span className="text-gray-600">Logs this month</span><span className="font-medium">12</span></div>
            <div className="flex justify-between sm:block"><span className="text-gray-600">Last log</span><span className="font-medium">V-012, Feb 9</span></div>
            <div className="sm:col-span-1 pt-2 sm:pt-0 border-t sm:border-t-0 border-amber-200">
              <p className="text-xs text-amber-800">Maintenance is paid by the driver. Company does not deduct from budget or AP.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
