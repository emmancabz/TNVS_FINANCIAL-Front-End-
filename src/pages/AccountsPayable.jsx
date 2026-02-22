import { useState } from 'react'

function AccountsPayable() {
  const [approved, setApproved] = useState({})
  const rows = [
    { id: '1', driverName: 'Driver-001', tripAmount: 500, payableAmount: 400, paymentMethod: 'GCash', date: 'Feb 20, 2026' },
    { id: '2', driverName: 'Driver-002', tripAmount: 500, payableAmount: 400, paymentMethod: 'Bank Transfer', date: 'Feb 21, 2026' },
    { id: '3', driverName: 'Driver-003', tripAmount: 750, payableAmount: 600, paymentMethod: 'Cash', date: 'Feb 19, 2026' },
  ]

  const handleApprove = (id) => {
    setApproved((p) => ({ ...p, [id]: true }))
  }

  return (
    <div className="p-6 md:p-8 lg:p-10 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 tracking-tight">Accounts Payable</h1>
        <p className="text-gray-500">Liability Management</p>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50/80">
              <tr>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Driver Name</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Trip Amount</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Payable Amount</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Payment Method</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-5 py-3.5 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((row) => {
                const isApproved = approved[row.id]
                return (
                  <tr key={row.id} className="hover:bg-gray-50/50 transition-colors duration-150">
                    <td className="px-5 py-3.5 font-medium text-gray-900">{row.driverName}</td>
                    <td className="px-5 py-3.5 text-gray-700">₱{row.tripAmount}</td>
                    <td className="px-5 py-3.5 font-medium text-gray-900">₱{row.payableAmount}</td>
                    <td className="px-5 py-3.5 text-gray-600">{row.paymentMethod}</td>
                    <td className="px-5 py-3.5 text-gray-500">{row.date}</td>
                    <td className="px-5 py-3.5 text-right">
                      <button
                        type="button"
                        disabled={isApproved}
                        onClick={() => handleApprove(row.id)}
                        className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 active:scale-[0.98] ${
                          isApproved
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-[#2ecc71] text-white hover:bg-[#27ae60] shadow-[0_2px_8px_rgba(46,204,113,0.3)] hover:shadow-[0_4px_12px_rgba(46,204,113,0.35)]'
                        }`}
                      >
                        {isApproved ? 'Approved' : 'Approve for Payout'}
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AccountsPayable
