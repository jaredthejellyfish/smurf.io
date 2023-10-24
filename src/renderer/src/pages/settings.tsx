import LogoutButton from '@renderer/components/logout-button'
import useUser from '@renderer/lib/hooks/useUser'

const SettingsPage = (): JSX.Element => {
  const { user } = useUser()

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <LogoutButton />
    </div>
  )
}

export default SettingsPage
