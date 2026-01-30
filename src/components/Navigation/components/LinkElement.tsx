import { NavLink } from 'react-router'

interface LinkElementProps {
  to: string
  label: string
  icon: React.ReactNode
}

export default function LinkElement({ to, label, icon }: LinkElementProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 px-4 py-4 rounded-lg ${
          isActive
            ? 'bg-gray-100 text-slate-900 shadow-sm'
            : 'text-slate-600 hover:bg-gray-50 hover:text-slate-900'
        }`
      }
    >
      <span>{icon}</span>
      {label}
    </NavLink>
  )
}
