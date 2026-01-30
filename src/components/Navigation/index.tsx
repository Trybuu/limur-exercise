import { GoHome } from 'react-icons/go'
import { PiUsers } from 'react-icons/pi'
import LinkElement from './components/LinkElement'

const links = [
  { to: '/', label: 'Strona Główna', icon: <GoHome className="text-xl" /> },
  {
    to: '/users',
    label: 'Użytkownicy',
    icon: <PiUsers className="text-xl" />,
  },
]

export default function Navigation() {
  return (
    <nav className="w-full">
      <ul className="flex flex-col gap-2">
        {links.map(({ to, label, icon }) => (
          <li key={to}>
            <LinkElement to={to} label={label} icon={icon} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
