import { FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa'

export type SortOrder = 'asc' | 'desc' | 'none'

interface SortButtonProps {
  order: SortOrder
  onClick: () => void
}

export default function SortButton({ order, onClick }: SortButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center gap-2 px-2 py-1 hover:bg-slate-100 rounded-md transition-colors font-semibold text-slate-700"
    >
      <span className="flex items-center text-slate-400 group-hover:text-blue-600 transition-colors">
        {order === 'none' && (
          <FaSortAlphaUp size={16} className="text-gray-300" />
        )}
        {order === 'asc' && (
          <FaSortAlphaUp size={16} className="text-blue-600" />
        )}
        {order === 'desc' && (
          <FaSortAlphaDown size={16} className="text-blue-600" />
        )}
      </span>
    </button>
  )
}
