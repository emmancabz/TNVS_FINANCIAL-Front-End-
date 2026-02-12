import {
  CheckCircle,
  DollarSign,
  Lock,
  TrendingUp,
  AlertTriangle,
  FileText,
  Calendar,
} from 'lucide-react'

function BudgetManagement() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Budget Management</h1>
        <p className="text-gray-600">Manage budgets, track utilization, and control spending</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary-600" />
          Core Automations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2">Budget Entry (Dept/Project/Expense)</h3>
            <p className="text-sm text-gray-600 mb-3">
              Create and manage budgets at multiple levels: by department, project, or expense category.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              <span className="px-2 py-0.5 bg-primary-100 text-primary-700 rounded text-xs">Fuel</span>
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">Payroll</span>
              <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-xs">Utilities</span>
              <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">Office Needs</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Maintenance is driver-funded — not in company budget.</p>
            <div className="flex items-center gap-2 mt-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600">12 active budgets</span>
            </div>
          </div>

          <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2">Auto-deduct Available Budget</h3>
            <p className="text-sm text-gray-600 mb-3">
              Automatically deducts from available budget when disbursements are approved.
            </p>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600">Auto-deduction active</span>
            </div>
          </div>

          <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-red-600" />
              Auto-lock if Over-budget
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Automatically prevents disbursement creation when budget limit is exceeded.
            </p>
            <div className="mt-2">
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">Active</span>
              <span className="text-xs text-gray-600 ml-2">3 blocks this month</span>
            </div>
          </div>

          <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2">Budget Adjustments → GL Posting</h3>
            <p className="text-sm text-gray-600 mb-3">
              Automatically creates journal entries in General Ledger for budget adjustments.
            </p>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600">GL sync active</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary-600" />
          System Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Revision Approval UI</h3>
            <p className="text-sm text-gray-600 mb-3">
              Request and approve budget revisions with proper authorization workflow.
            </p>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm">
              Request Revision
            </button>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Remaining Budget Dashboard
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Real-time view of remaining budget by department, project, or category.
            </p>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm">
              View Dashboard
            </button>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-600" />
              Over-budget Alerts
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Automatic notifications when budgets are exceeded or approaching limits.
            </p>
            <div className="mt-2">
              <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded">2 active alerts</span>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Spending Forecast
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Visual forecasts based on current spending trends and budget utilization.
            </p>
            <div className="mt-4 p-6 bg-white rounded border border-gray-200 flex items-center justify-center">
              <p className="text-sm text-gray-500">Chart view</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Total Budget</h3>
          <p className="text-3xl font-bold text-gray-900">₱5,000,000</p>
          <p className="text-sm text-gray-500 mt-1">For February 2026</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Utilized</h3>
          <p className="text-3xl font-bold text-primary-600">₱3,400,000</p>
          <p className="text-sm text-gray-500 mt-1">68% utilized</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Remaining</h3>
          <p className="text-3xl font-bold text-green-600">₱1,600,000</p>
          <p className="text-sm text-gray-500 mt-1">32% remaining</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Budget Details</h2>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            Create Budget
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Department/Project</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Budget</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Utilized</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Remaining</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Operations</td>
                <td className="px-4 py-3 text-sm text-gray-600">Fuel</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱200,000</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱125,000</td>
                <td className="px-4 py-3 text-sm text-green-600 font-medium">₱75,000</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">62% Used</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">HR</td>
                <td className="px-4 py-3 text-sm text-gray-600">Payroll</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱800,000</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱720,000</td>
                <td className="px-4 py-3 text-sm text-green-600 font-medium">₱80,000</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">90% Used</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Admin</td>
                <td className="px-4 py-3 text-sm text-gray-600">Utilities</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱50,000</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱32,000</td>
                <td className="px-4 py-3 text-sm text-green-600 font-medium">₱18,000</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">64% Used</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Admin</td>
                <td className="px-4 py-3 text-sm text-gray-600">Office Needs</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱30,000</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱12,500</td>
                <td className="px-4 py-3 text-sm text-green-600 font-medium">₱17,500</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">42% Used</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Marketing</td>
                <td className="px-4 py-3 text-sm text-gray-600">Advertising</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱300,000</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱180,000</td>
                <td className="px-4 py-3 text-sm text-green-600 font-medium">₱120,000</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">60% Used</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default BudgetManagement
