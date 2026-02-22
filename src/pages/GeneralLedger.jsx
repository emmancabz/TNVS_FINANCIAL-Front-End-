const GL_ENTRIES = [
  { debit: 'Cash (₱500)', credit: '—', description: 'Boundary collection', date: 'Feb 20, 2026' },
  { debit: '—', credit: 'Revenue (₱100)', description: 'Company share', date: 'Feb 20, 2026' },
  { debit: '—', credit: 'Accounts Payable (₱400)', description: 'Driver payable', date: 'Feb 20, 2026' },
]

const totalDebit = 500
const totalCredit = 500

function GeneralLedger() {
  return (
    <div className="p-6 md:p-8 lg:p-10 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 tracking-tight">General Ledger</h1>
        <p className="text-gray-500">Financial Consolidation & Double-Entry Accounting</p>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50/80">
              <tr>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Debit</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Credit</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {GL_ENTRIES.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors duration-150">
                  <td className="px-5 py-3.5 font-medium text-gray-900">{row.debit}</td>
                  <td className="px-5 py-3.5 font-medium text-gray-900">{row.credit}</td>
                  <td className="px-5 py-3.5 text-gray-600">{row.description}</td>
                  <td className="px-5 py-3.5 text-gray-500">{row.date}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50 border-t-2 border-gray-200">
              <tr>
                <td className="px-5 py-3.5 font-bold text-gray-900">Total Debit: ₱{totalDebit}</td>
                <td className="px-5 py-3.5 font-bold text-gray-900">Total Credit: ₱{totalCredit}</td>
                <td className="px-5 py-3.5 text-gray-500 italic">Totals balance</td>
                <td className="px-5 py-3.5" />
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}

export default GeneralLedger
