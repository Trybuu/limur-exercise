import type { UserData } from '../types/types'

interface UserRecordProps {
  user: UserData
  onView: (id: number) => void
  onDelete: (id: number) => void
}

export default function UserRecord({
  user,
  onView,
  onDelete,
}: UserRecordProps) {
  return (
    <tr className="group hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-none">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-semibold text-slate-900">{user.name}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-slate-600 font-medium">{user.email}</div>
      </td>

      <td className="px-6 py-4">
        <div className="text-sm text-slate-500 leading-relaxed max-w-xs truncate md:max-w-none">
          <span className="font-medium text-slate-700">
            {user.address.city}
          </span>
          ,
          <span className="ml-1">
            {user.address.street} {user.address.suite}
          </span>
          <div className="text-xs text-slate-400">{user.address.zipcode}</div>
        </div>
      </td>

      <td className="flex flex-col items-start px-6 py-4 text-right text-sm font-medium space-x-3">
        <button
          onClick={() => onView(user.id)}
          className="text-blue-600 hover:text-blue-900 transition-colors"
        >
          Podgląd
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          Usuń
        </button>
      </td>
    </tr>
  )
}
