interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export default function Button({
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`w-full md:w-auto px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white text-center font-bold rounded-lg transition-colors shadow-md ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
