import PageHeader from '@/components/PageHeader'
import UsersTable from '@/modules/users/components/UsersTable'
import { fetchUsers } from '@/modules/users/slices/usersSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'

export default function Users() {
  const appDispatch = useAppDispatch()
  const { data, loading } = useAppSelector((state) => state.users)

  useEffect(() => {
    if (data.length === 0) {
      appDispatch(fetchUsers())
    }
  }, [appDispatch, data.length])

  return (
    <>
      <PageHeader title="Użytkownicy" />
      {loading ? <p>Ładowanie użytkowników...</p> : <UsersTable users={data} />}
    </>
  )
}
