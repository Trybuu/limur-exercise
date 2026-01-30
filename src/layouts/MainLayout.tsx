import ContentContainer from '@/components/ContentContainer'
import Sidebar from '@/components/Sidebar'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <main className="flex flex-row gap-2 w-full h-screen max-w-360 mx-auto p-6 ">
      <ContentContainer className="flex-1">
        <Sidebar />
      </ContentContainer>

      <ContentContainer className="flex-5">
        <Outlet />
      </ContentContainer>
    </main>
  )
}
