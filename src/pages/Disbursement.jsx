import {
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Upload,
  History,
} from 'lucide-react'

function Disbursement() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Disbursement</h1>
        <p className="text-gray-600">Manage disbursement vouchers and payment workflows</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary-600" />
          Core Automations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2">Auto-check Budget Availability</h3>
            <p className="text-sm text-gray-600">
              System automatically checks available budget before allowing disbursement creation.
              Shows remaining budget and blocks if insufficient.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">Active</span>
              <span className="text-xs text-gray-500">Budget: ₱500,000 remaining</span>
            </div>
          </div>

          <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2">Auto-check AP Balance</h3>
            <p className="text-sm text-gray-600">
              Validates Accounts Payable balance matches invoice amount before processing payment.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">Active</span>
              <span className="text-xs text-gray-500">AP Balance: ₱2.5M</span>
            </div>
          </div>

          <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2">Auto-block Duplicate DV</h3>
            <p className="text-sm text-gray-600">
              Prevents creation of duplicate disbursement vouchers by checking invoice numbers,
              amounts, and vendor details.
            </p>
            <div className="mt-3">
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">Active</span>
            </div>
          </div>

          <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2">Auto-generate DV No.</h3>
            <p className="text-sm text-gray-600">
              Automatically generates unique DV numbers in format: DV-YYYY-XXX (e.g., DV-2026-001).
            </p>
            <div className="mt-3">
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">Active</span>
              <span className="text-xs text-gray-500 ml-2">Next: DV-2026-045</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary-600" />
          Workflows
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">2-Level Approval Routing</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-gray-900">Level 1: Department Head</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">For Approval</span>
                  </div>
                  <p className="text-sm text-gray-600">Submitted: Feb 10, 2026 09:30 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-gray-900">Level 2: Finance Manager</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Pending</span>
                  </div>
                  <p className="text-sm text-gray-600">Awaiting Level 1 approval</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">Status Indicators</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                For Approval
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Approved
              </span>
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                Rejected
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Paid
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-primary-600" />
          System Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Auto-update GL</h3>
            <p className="text-sm text-gray-600 mb-3">
              Automatically posts journal entries to General Ledger upon approval and payment.
            </p>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600">Last GL update: 2 mins ago</span>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Auto-update AP</h3>
            <p className="text-sm text-gray-600 mb-3">
              Updates Accounts Payable subsidiary ledger when DV is created but not yet paid.
            </p>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600">AP sync active</span>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Document Attachment
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Upload supporting documents (invoices, receipts, contracts).
            </p>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm">
              Upload Document
            </button>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <History className="w-4 h-4" />
              Audit Trail
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Complete history of all actions, approvals, and changes.
            </p>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm">
              View Audit Trail
            </button>
          </div>
        </div>
      </div>

      {/* Expense tag when creating DV */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Tag Expense Category</h2>
        <p className="text-sm text-gray-600 mb-4">When creating a DV, tag the expense for reporting: Fuel, Payroll, or Office Needs. (Maintenance is driver-funded — not company disbursement.)</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-primary-100 text-primary-700 rounded-lg text-sm font-medium">Fuel</span>
          <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">Payroll</span>
          <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">Office Needs</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Disbursement Vouchers</h2>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            Create New DV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">DV No.</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Vendor</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Expense Tag</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">DV-2026-044</td>
                <td className="px-4 py-3 text-sm text-gray-600">ABC Supplies Inc.</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱25,000.00</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Office Needs</span>
                </td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">For Approval</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">Feb 10, 2026</td>
                <td className="px-4 py-3">
                  <button className="text-primary-600 hover:text-primary-700 text-sm">View</button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">DV-2026-043</td>
                <td className="px-4 py-3 text-sm text-gray-600">EnviroCab Station</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱15,500.00</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs">Fuel</span>
                </td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Approved</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">Feb 9, 2026</td>
                <td className="px-4 py-3">
                  <button className="text-primary-600 hover:text-primary-700 text-sm">View</button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">DV-2026-042</td>
                <td className="px-4 py-3 text-sm text-gray-600">Office Supplies Co.</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱50,000.00</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Office Needs</span>
                </td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Paid</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">Feb 8, 2026</td>
                <td className="px-4 py-3">
                  <button className="text-primary-600 hover:text-primary-700 text-sm">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Disbursement
