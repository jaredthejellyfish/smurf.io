import supabase from '@renderer/lib/supabase'
import { Button } from '../ui/button'

const LogoutButton = (): JSX.Element => {
  const handleLogout = async (): Promise<void> => {
    await supabase.auth.signOut()
    window.location.reload()
  }

  return <Button onClick={handleLogout}>Logout</Button>
}

export default LogoutButton
