import { useState } from 'react'
import {
  CheckCircle,
  FileText,
  Download,
  TrendingUp,
  AlertTriangle,
  History,
} from 'lucide-react'
import ReceiptModal from '../components/ReceiptModal'

const MODES = ['Cash', 'GCash', 'Wallet', 'Bank']

function Collections() {
  const [receiptOpen, setReceiptOpen] = useState(false)
  const [receiptData, setReceiptData] = useState({})
  const [form, setForm] = useState({
    driverName: '',
    date: new Date().toISOString().slice(0, 10),
    boundaryAmount: '',
    modeOfPayment: 'Cash',
    remarks: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const refNo = 'RCP-' + Math.floor(10000 + Math.random() * 90000)
    setReceiptData({
      ...form,
      refNo,
    })
    setReceiptOpen(true)
  }

  const handleGenerateReceipt = () => {
    if (!form.driverName.trim() || !form.boundaryAmount) return
    const refNo = 'RCP-' + Math.floor(10000 + Math.random() * 90000)
    setReceiptData({ ...form, refNo })
    setReceiptOpen(true)
  }

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Collections</h1>
        <p className="text-gray-600">Manage collections and boundary remittance from drivers</p>
      </div>

      {/* Fast Boundary Entry */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Boundary Entry</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Driver Name</label>
            <input
              type="text"
              value={form.driverName}
              onChange={(e) => setForm((f) => ({ ...f, driverName: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Driver name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Boundary Amount (₱)</label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={form.boundaryAmount}
              onChange={(e) => setForm((f) => ({ ...f, boundaryAmount: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="0"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mode of Payment</label>
            <select
              value={form.modeOfPayment}
              onChange={(e) => setForm((f) => ({ ...f, modeOfPayment: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              {MODES.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-1">Remarks</label>
            <input
              type="text"
              value={form.remarks}
              onChange={(e) => setForm((f) => ({ ...f, remarks: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 flex-1"
              placeholder="Optional"
            />
          </div>
          <div className="sm:col-span-2 lg:col-span-5 flex items-end">
            <button
              type="submit"
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
            >
              Generate Receipt
            </button>
          </div>
        </form>
      </div>

      <ReceiptModal
        isOpen={receiptOpen}
        onClose={() => setReceiptOpen(false)}
        data={receiptData}
      />

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary-600" />
          Core Automations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2">Payment Matching</h3>
            <p className="text-sm text-gray-600 mb-3">
              Matches payments received to outstanding invoices and billings.
            </p>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600">Active</span>
            </div>
          </div>
          <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2">Post to AR, GL, Cash</h3>
            <p className="text-sm text-gray-600 mb-3">
              Posts collections to AR Subsidiary Ledger, General Ledger, and Cash accounts.
            </p>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600">Active</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Today&apos;s Collections</h3>
          <p className="text-2xl md:text-3xl font-bold text-primary-600">₱125,000</p>
          <p className="text-sm text-gray-500 mt-1">45 transactions</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">This Week</h3>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">₱850,000</p>
          <p className="text-sm text-gray-500 mt-1">312 transactions</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">This Month</h3>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">₱3,200,000</p>
          <p className="text-sm text-gray-500 mt-1">1,245 transactions</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Outstanding</h3>
          <p className="text-2xl md:text-3xl font-bold text-yellow-600">₱450,000</p>
          <p className="text-sm text-gray-500 mt-1">28 pending</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Collections</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium">
              <Download className="w-4 h-4 inline mr-2" />
              Export
            </button>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium">
              Record Collection
            </button>
          </div>
        </div>
        <div className="overflow-x-auto -mx-4 md:mx-0">
          <table className="w-full min-w-[600px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">OR No.</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Driver/Partner</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Payment Method</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">OR-2026-045</td>
                <td className="px-4 py-3 text-sm text-gray-600">Driver-001</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱5,000.00</td>
                <td className="px-4 py-3 text-sm text-gray-600">Cash</td>
                <td className="px-4 py-3 text-sm text-gray-600">Feb 10, 2026</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Posted</span>
                </td>
                <td className="px-4 py-3">
                  <button type="button" className="text-primary-600 hover:text-primary-700 text-sm font-medium">View</button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">OR-2026-044</td>
                <td className="px-4 py-3 text-sm text-gray-600">Driver-002</td>
                <td className="px-4 py-3 text-sm text-gray-900">₱3,500.00</td>
                <td className="px-4 py-3 text-sm text-gray-600">Bank</td>
                <td className="px-4 py-3 text-sm text-gray-600">Feb 10, 2026</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Posted</span>
                </td>
                <td className="px-4 py-3">
                  <button type="button" className="text-primary-600 hover:text-primary-700 text-sm font-medium">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Collections
