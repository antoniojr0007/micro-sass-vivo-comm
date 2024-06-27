import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from '@/components/dashboard/page'

export default async function AppPage() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Settings</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <h1>Settings</h1>
      </DashboardPageMain>
    </DashboardPage>
  )
}
