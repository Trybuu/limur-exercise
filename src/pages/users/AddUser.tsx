import PageHeader from '@/components/PageHeader'
import AddUserView from '@/modules/users/views/AddUserView'

export default function AddUser() {
  return (
    <>
      <PageHeader title="Dodaj nowego użytkownika" />
      <AddUserView />
    </>
  )
}
