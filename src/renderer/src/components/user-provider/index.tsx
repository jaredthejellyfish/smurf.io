import { UserProfile } from '@renderer/lib/database-types'
import React, { createContext } from 'react'

type Props = {
  children: React.ReactNode
  user: UserProfile
}

const UserContext = createContext({
  avatar_url: '',
  id: '',
  username: '',
  updated_at: ''
} as UserProfile)

const UserProvider = (props: Props): JSX.Element => {
  const { children, user } = props
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export default UserProvider
export { UserContext }
