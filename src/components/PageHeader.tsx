interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <header>
      <h1 className="text-2xl">{title}</h1>
    </header>
  )
}
