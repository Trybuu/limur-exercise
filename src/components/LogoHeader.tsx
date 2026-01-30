import { AiFillProject } from 'react-icons/ai'

export default function LogoHeader() {
  return (
    <header>
      <div className="flex flex-row gap-2 items-center">
        <AiFillProject className="size-12" />

        <p>
          <span className="font-medium">Limur</span>
          <span> - zadanie rekrutacyjne</span>
        </p>
      </div>
    </header>
  )
}
