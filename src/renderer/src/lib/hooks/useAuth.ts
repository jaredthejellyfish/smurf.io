import { AuthError, PostgrestError, Session } from '@supabase/supabase-js'
import { useState, useEffect } from 'react' // Import any necessary hooks
import { UserProfile } from '../database-types'
import supabase from '../supabase'

function useAuth(): {
  session: Session | null
  user: UserProfile | null
  error: PostgrestError | null | AuthError | string
  isLoading: boolean
} {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<UserProfile | null>(null)
  const [error, setError] = useState<PostgrestError | null | string | AuthError>(null)
  const [isLoading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    const getSession = async (): Promise<void> => {
      const { data, error } = await supabase.auth.getSession()
      if (error || !data.session) {
        setError(error || 'There was an error fetching your session')
        setLoading(false)
        return
      }

      setSession(data.session)
    }
    getSession()
  }, [])

  useEffect(() => {
    const getUser = async (): Promise<void> => {
      if (!session?.user?.id) {
        return
      }
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session?.user?.id)
        .single()
      if (error || !data) {
        setError(error)
        setLoading(false)
        return
      }

      setUser(data)
    }
    if (session && session?.user?.id) {
      getUser()
    }
  }, [session])

  return { session, user, error, isLoading }
}

export default useAuth
