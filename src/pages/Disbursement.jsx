const DISBURSEMENT_ROWS = [
  { dvNo: 'DV-2026-044', description: 'Fuel — EnviroCab', amount: 45000, status: 'Cleared', date: 'Feb 20, 2026' },
  { dvNo: 'DV-2026-043', description: 'Office supplies', amount: 12500, status: 'Cleared', date: 'Feb 19, 2026' },
  { dvNo: 'DV-2026-042', description: 'Utilities', amount: 8200, status: 'Cleared', date: 'Feb 18, 2026' },
]

function Disbursement() {
  return (
    <div className="p-6 md:p-8 lg:p-10 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 tracking-tight">Disbursement</h1>
        <p className="text-gray-500">Cash Outflow & Fund Settlement</p>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50/80">
              <tr>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">DV No.</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {DISBURSEMENT_ROWS.map((row) => (
                <tr key={row.dvNo} className="hover:bg-gray-50/50 transition-colors duration-150">
                  <td className="px-5 py-3.5 font-medium text-gray-900">{row.dvNo}</td>
                  <td className="px-5 py-3.5 text-gray-700">{row.description}</td>
                  <td className="px-5 py-3.5 font-medium text-gray-900">₱{row.amount.toLocaleString()}</td>
                  <td className="px-5 py-3.5">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-green-100 text-green-700">{row.status}</span>
                  </td>
                  <td className="px-5 py-3.5 text-gray-500">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Disbursement
