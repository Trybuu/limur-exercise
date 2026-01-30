import UserDetailsView from '@/modules/users/views/UserDetailsView'
import { useAppSelector } from '@/store/hooks'
import { useNavigate, useParams } from 'react-router'

export default function UserDetails() {
  const navigate = useNavigate()
  const users = useAppSelector((state) => state.users.data)
  const params = useParams()

  const user = users.find((u) => u.id === Number(params.id))

  if (user) return <UserDetailsView user={user} onBack={() => navigate(-1)} />
}
