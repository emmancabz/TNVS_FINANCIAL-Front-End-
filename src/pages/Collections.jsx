import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

const COLLECTION_DATA = [
  { name: 'GCash', value: 300000, color: '#22c55e' },
  { name: 'Cash', value: 150000, color: '#3b82f6' },
  { name: 'Bank Transfer', value: 50000, color: '#8b5cf6' },
]

const totalCollected = COLLECTION_DATA.reduce((s, d) => s + d.value, 0)

function Collections() {
  return (
    <div className="p-6 md:p-8 lg:p-10 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 tracking-tight">Collections</h1>
        <p className="text-gray-500">Pumapasok na pera.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Total Collected</h2>
          <p className="text-3xl font-semibold text-[#2ecc71] mb-6">₱{totalCollected.toLocaleString()}</p>
          <div className="h-[260px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={COLLECTION_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {COLLECTION_DATA.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => [`₱${Number(v).toLocaleString()}`, '']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">By Channel</h2>
          <ul className="space-y-3">
            {COLLECTION_DATA.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between py-3 px-4 rounded-xl bg-gray-50/80 border border-gray-100 transition-shadow duration-200 hover:shadow-sm"
              >
                <span className="text-gray-700 font-medium">₱{item.value.toLocaleString()} via {item.name}</span>
                <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-500">Total</span>
            <span className="text-xl font-semibold text-gray-900">₱{totalCollected.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collections
