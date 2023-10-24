import { useContext } from 'react'
import { UserContext } from '@renderer/components/user-provider'
import { UserProfile } from '../database-types'

function useUser(): { user: UserProfile } {
  const user = useContext(UserContext)

  return { user }
}

export default useUser
