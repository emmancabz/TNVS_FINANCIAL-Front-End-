import {
  CheckCircle,
  FileText,
  AlertTriangle,
  Download,
  RotateCcw,
  Calendar,
  TrendingUp,
  Fuel,
  Wrench,
  ArrowRightLeft,
  Users,
  Zap,
  Building2,
  PieChart,
} from 'lucide-react'

function GeneralLedger() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">General Ledger</h1>
        <p className="text-gray-600">Central accounting ledger with posting and validation</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary-600" />
          Core Automations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2">Auto-posting from Modules</h3>
            <p className="text-sm text-gray-600 mb-3">
              Automatically posts transactions from Disbursement, AP/AR, Budget, and Collections modules.
            </p>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600">Last post: 5 mins ago</span>
            </div>
          </div>

          <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2">Debit = Credit Validation</h3>
            <p className="text-sm text-gray-600 mb-3">
              Ensures all journal entries balance (Total Debits = Total Credits) before posting.
            </p>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600">All entries balanced</span>
            </div>
          </div>

          <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-600" />
              SL vs GL Mismatch Detection
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Automatically detects discrepancies between Subsidiary Ledgers and General Ledger.
            </p>
            <div className="mt-2">
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">No mismatches</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary-600" />
          System Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Period Closing
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Lock accounting periods to prevent modifications after closing. Current period: February 2026
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">Unlocked</span>
              <button className="text-xs text-primary-600 hover:text-primary-700">Lock Period</button>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Auto-generate Financial Reports
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Generate Trial Balance, Balance Sheet, Income Statement, and Cash Flow automatically.
            </p>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 bg-primary-600 text-white rounded text-xs hover:bg-primary-700">
                Trial Balance
              </button>
              <button className="px-3 py-1 bg-primary-600 text-white rounded text-xs hover:bg-primary-700">
                Balance Sheet
              </button>
              <button className="px-3 py-1 bg-primary-600 text-white rounded text-xs hover:bg-primary-700">
                Income Statement
              </button>
              <button className="px-3 py-1 bg-primary-600 text-white rounded text-xs hover:bg-primary-700">
                Cash Flow
              </button>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <RotateCcw className="w-4 h-4" />
              Reversals
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Reverse incorrect journal entries with automatic audit trail creation.
            </p>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm">
              Reverse Entry
            </button>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Recurring JEs
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Set up automatic monthly journal entries (e.g., depreciation, accruals).
            </p>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm">
              Manage Recurring Entries
            </button>
          </div>
        </div>
      </div>

      {/* Expense Categories */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Expense Categories</h2>
        <div className="space-y-6">
          {/* Fuel / Gas */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Fuel className="w-5 h-5 text-primary-600" />
              Fuel / Gas Expense
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Driver</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Driver name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Liters</label>
                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="0" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cost (₱)</label>
                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="0" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle ID</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="V-001" />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button type="button" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm font-medium">Record & Post to GL</button>
            </div>
          </div>

          {/* Maintenance Logs — driver-funded, history only */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 border-l-4 border-l-amber-400">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-amber-600" />
                Maintenance Logs
              </h3>
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-md text-xs font-semibold">
                Maintenance: Driver-funded (Company does not pay)
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              For record keeping only. Logged under driver/vehicle records. Not included in company expense, budget, or disbursement.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Parts</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Description" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Repair Cost (₱)</label>
                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="0" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Labor Cost (₱)</label>
                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="0" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle ID</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="V-001" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
              </div>
              <div className="lg:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Logs / Notes</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Notes" />
              </div>
            </div>
            <button type="button" className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 text-sm font-medium">Save to Maintenance Log</button>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Recent Maintenance Logs (history only — not company expense)</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase">Date</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase">Vehicle</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase">Description</th>
                      <th className="px-3 py-2 text-right text-xs font-medium text-gray-600 uppercase">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="px-3 py-2 text-gray-600">Feb 9, 2026</td><td className="px-3 py-2">V-012</td><td className="px-3 py-2 text-gray-600">Brake repair (driver-funded)</td><td className="px-3 py-2 text-right">₱8,500</td></tr>
                    <tr><td className="px-3 py-2 text-gray-600">Feb 5, 2026</td><td className="px-3 py-2">V-007</td><td className="px-3 py-2 text-gray-600">Oil change (driver-funded)</td><td className="px-3 py-2 text-right">₱2,200</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Payroll */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary-600" />
              Payroll
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="e.g. Weekly payroll" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount (₱)</label>
                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="0" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
              </div>
            </div>
            <button type="button" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm font-medium">Post to GL</button>
          </div>

          {/* Utilities & Bills */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary-600" />
              Utilities & Bills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="e.g. Electricity, Water" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount (₱)</label>
                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="0" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
              </div>
            </div>
            <button type="button" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm font-medium">Post to GL</button>
          </div>

          {/* Office Supplies / Equipment */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary-600" />
              Office Supplies / Equipment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="e.g. Supplies, equipment" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount (₱)</label>
                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="0" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
              </div>
            </div>
            <button type="button" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm font-medium">Post to GL</button>
          </div>
        </div>
      </div>

      {/* Budget Allocation Summary */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <PieChart className="w-5 h-5 text-primary-600" />
          Budget Allocation Summary
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[400px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Category</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-700 uppercase">Allocated</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-700 uppercase">Used</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-700 uppercase">Remaining</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-3 text-sm text-gray-900">Fuel</td><td className="px-4 py-3 text-sm text-right">₱200,000</td><td className="px-4 py-3 text-sm text-right">₱125,000</td><td className="px-4 py-3 text-sm text-right text-green-600 font-medium">₱75,000</td></tr>
              <tr><td className="px-4 py-3 text-sm text-gray-900">Payroll</td><td className="px-4 py-3 text-sm text-right">₱800,000</td><td className="px-4 py-3 text-sm text-right">₱720,000</td><td className="px-4 py-3 text-sm text-right text-green-600 font-medium">₱80,000</td></tr>
              <tr><td className="px-4 py-3 text-sm text-gray-900">Utilities</td><td className="px-4 py-3 text-sm text-right">₱50,000</td><td className="px-4 py-3 text-sm text-right">₱32,000</td><td className="px-4 py-3 text-sm text-right text-green-600 font-medium">₱18,000</td></tr>
              <tr><td className="px-4 py-3 text-sm text-gray-900">Office Needs</td><td className="px-4 py-3 text-sm text-right">₱30,000</td><td className="px-4 py-3 text-sm text-right">₱12,500</td><td className="px-4 py-3 text-sm text-right text-green-600 font-medium">₱17,500</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* GL Summary: Company expenses only (no maintenance — driver-funded) */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <ArrowRightLeft className="w-5 h-5 text-primary-600" />
          GL Summary by Type (Company only)
        </h2>
        <div className="overflow-x-auto -mx-4 md:mx-0">
          <table className="w-full min-w-[640px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Entry No.</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Description</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-700 uppercase">Debit</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-700 uppercase">Credit</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-primary-50/50">
                <td className="px-4 py-3 text-sm font-medium text-primary-700">Fuel Expenses</td>
                <td className="px-4 py-3 text-sm text-gray-900">JE-2026-126</td>
                <td className="px-4 py-3 text-sm text-gray-600">Feb 10, 2026</td>
                <td className="px-4 py-3 text-sm text-gray-600">EnviroCab fuel - V-001, V-002</td>
                <td className="px-4 py-3 text-sm text-gray-900 text-right">₱18,500.00</td>
                <td className="px-4 py-3 text-sm text-gray-900 text-right">-</td>
                <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Posted</span></td>
              </tr>
              <tr className="bg-green-50/50">
                <td className="px-4 py-3 text-sm font-medium text-green-800">Boundary Income</td>
                <td className="px-4 py-3 text-sm text-gray-900">JE-2026-124</td>
                <td className="px-4 py-3 text-sm text-gray-600">Feb 10, 2026</td>
                <td className="px-4 py-3 text-sm text-gray-600">Boundary remittance - drivers</td>
                <td className="px-4 py-3 text-sm text-gray-900 text-right">-</td>
                <td className="px-4 py-3 text-sm text-gray-900 text-right">₱125,000.00</td>
                <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Posted</span></td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-800">Allocations</td>
                <td className="px-4 py-3 text-sm text-gray-900">JE-2026-123</td>
                <td className="px-4 py-3 text-sm text-gray-600">Feb 10, 2026</td>
                <td className="px-4 py-3 text-sm text-gray-600">Budget allocation - Operations</td>
                <td className="px-4 py-3 text-sm text-gray-900 text-right">₱50,000.00</td>
                <td className="px-4 py-3 text-sm text-gray-900 text-right">-</td>
                <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Posted</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Journal Entries</h2>
          <button type="button" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium">
            Create Manual Entry
          </button>
        </div>
        <div className="overflow-x-auto -mx-4 md:mx-0">
          <table className="w-full min-w-[640px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Entry No.</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Description</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Debit</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Credit</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Source</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">JE-2026-126</td>
                <td className="px-4 py-3 text-sm text-gray-600">Feb 10, 2026</td>
                <td className="px-4 py-3 text-sm text-gray-600">Fuel Expense - EnviroCab</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱18,500.00</td>
                <td className="px-4 py-3 text-sm text-gray-900">-</td>
                <td className="px-4 py-3 text-sm text-gray-600">Fuel</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Posted</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">JE-2026-124</td>
                <td className="px-4 py-3 text-sm text-gray-600">Feb 10, 2026</td>
                <td className="px-4 py-3 text-sm text-gray-600">Boundary remittance (AR)</td>
                <td className="px-4 py-3 text-sm text-gray-900">-</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱125,000.00</td>
                <td className="px-4 py-3 text-sm text-gray-600">Boundary</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Posted</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">JE-2026-123</td>
                <td className="px-4 py-3 text-sm text-gray-600">Feb 10, 2026</td>
                <td className="px-4 py-3 text-sm text-gray-600">Payment to ABC Supplies</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱25,000.00</td>
                <td className="px-4 py-3 text-sm text-gray-900">-</td>
                <td className="px-4 py-3 text-sm text-gray-600">Disbursement</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Posted</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">JE-2026-122</td>
                <td className="px-4 py-3 text-sm text-gray-600">Feb 10, 2026</td>
                <td className="px-4 py-3 text-sm text-gray-600">Cash - Payment</td>
                <td className="px-4 py-3 text-sm text-gray-900">-</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱25,000.00</td>
                <td className="px-4 py-3 text-sm text-gray-600">Disbursement</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Posted</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default GeneralLedger
