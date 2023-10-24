import LogoutButton from '@renderer/components/logout-button'
import useUser from '@renderer/lib/hooks/useUser'

const ProfilePage = (): JSX.Element => {
  const { user } = useUser()

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <LogoutButton />
    </div>
  )
}

export default ProfilePage
