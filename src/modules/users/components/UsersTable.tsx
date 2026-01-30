import { useNavigate } from 'react-router'
import type { UserData } from '../types/types'
import UserRecord from './UserRecord'
import { useAppDispatch } from '@/store/hooks'
import { useMemo, useState } from 'react'
import ButtonNavLink from '@/components/ButtonNavLink'
import SortButton, { type SortOrder } from '@/components/SortButton'

interface UsersTableProps {
  users: UserData[]
}

export default function UsersTable({ users }: UsersTableProps) {
  const navigate = useNavigate()
  const appDispatch = useAppDispatch()

  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState<SortOrder>('none')

  const handleSortByName = () => {
    setSortOrder((prev) => {
      if (prev === 'none') {
        return 'asc'
      } else if (prev === 'asc') {
        return 'desc'
      } else {
        return 'none'
      }
    })
  }

  const processedUsers = useMemo(() => {
    let output = users.filter((user) => {
      const address =
        `${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`.toLowerCase()
      return address.includes(searchQuery.toLowerCase())
    })

    if (sortOrder !== 'none') {
      output = [...output].sort((a, b) => {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()

        if (sortOrder === 'asc') {
          return nameA.localeCompare(nameB)
        } else {
          return nameB.localeCompare(nameA)
        }
      })
    }

    return output
  }, [users, searchQuery, sortOrder])

  return (
    <>
      <div className="flex flex-row items-stretch gap-4 mb-4">
        <input
          type="text"
          placeholder='Szukaj po adresie (np. "Kulas Light")'
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(event.target.value)
          }
          className="px-4 py-2 border border-slate-300 rounded-lg flex-3 min-w-0"
        />

        <ButtonNavLink
          to={'add'}
          className="whitespace-nowrap flex items-center justify-center flex-1"
        >
          Dodaj użytkownika
        </ButtonNavLink>
      </div>

      <div className="border border-slate-300 rounded-lg p-2 overflow-scroll">
        <table className="w-full border-collapse">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-md font-semibold text-slate-900 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  Imię i Nazwisko
                  <SortButton order={sortOrder} onClick={handleSortByName} />
                </div>
              </th>
              <th className="px-6 py-4 text-left text-md font-semibold text-slate-900 whitespace-nowrap">
                E-mail
              </th>
              <th className="px-6 py-4 text-left text-md font-semibold text-slate-900 whitespace-nowrap">
                Adres
              </th>
              {/* Action Buttons */}
              <th></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {processedUsers.map((user) => (
              <UserRecord
                key={user.id}
                user={user}
                onDelete={() => {
                  appDispatch({ type: 'users/userRemoved', payload: user.id })
                }}
                onView={() => {
                  navigate(`${user.id}`)
                }}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
