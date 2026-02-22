function AccountsReceivable() {
  const rows = [
    { tripId: 'T-2026-001', driver: 'Driver-001', totalTrip: 500, arAmount: 100, status: 'Collected', date: 'Feb 20, 2026' },
    { tripId: 'T-2026-002', driver: 'Driver-002', totalTrip: 500, arAmount: 100, status: 'Pending', date: 'Feb 21, 2026' },
    { tripId: 'T-2026-003', driver: 'Driver-003', totalTrip: 750, arAmount: 150, status: 'Collected', date: 'Feb 19, 2026' },
  ]

  return (
    <div className="p-6 md:p-8 lg:p-10 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 tracking-tight">Accounts Receivable</h1>
        <p className="text-gray-500">Habol na pera ng kumpanya. AR displays only the company’s share.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50/80">
              <tr>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Trip ID</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Driver</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Trip Amount</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">AR Amount</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((row) => (
                <tr key={row.tripId} className="hover:bg-gray-50/50 transition-colors duration-150">
                  <td className="px-5 py-3.5 font-medium text-gray-900">{row.tripId}</td>
                  <td className="px-5 py-3.5 text-gray-700">{row.driver}</td>
                  <td className="px-5 py-3.5 text-gray-700">₱{row.totalTrip}</td>
                  <td className="px-5 py-3.5 font-medium text-[#166534]">₱{row.arAmount}</td>
                  <td className="px-5 py-3.5">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${row.status === 'Collected' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {row.status}
                    </span>
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

export default AccountsReceivable
