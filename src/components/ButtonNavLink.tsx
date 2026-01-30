import { NavLink, type NavLinkProps } from 'react-router'

interface ButtonNavLinkProps extends NavLinkProps {
  children?: React.ReactNode
}

export default function ButtonNavLink({
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonNavLinkProps) {
  return (
    <NavLink
      className={`w-full md:w-auto px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white text-center font-bold rounded-lg transition-colors shadow-md ${className}`}
      type={type}
      {...props}
    >
      {children}
    </NavLink>
  )
}
