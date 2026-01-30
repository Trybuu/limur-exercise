interface ContentContainerProps {
  className?: string
  children: React.ReactNode
}

export default function ContentContainer({
  className = '',
  children,
}: ContentContainerProps) {
  return (
    <div
      className={`flex flex-col flex-2 gap-4 px-4 py-4  border border-gray-300 rounded-xl shadow-md bg-white ${className}`}
    >
      {children}
    </div>
  )
}
