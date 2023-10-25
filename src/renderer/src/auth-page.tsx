import React, { useState } from 'react'
import { SupabaseClient } from '@supabase/supabase-js'
import { Input } from './components/ui/input'

export default function AuthPage({ client }: { client: SupabaseClient }): JSX.Element {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const signIn = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const { error } = await client.auth.signInWithPassword({
      email: username,
      password: password
    })
    if (error) {
      console.error(error)
      return
    }
    window.location.reload()
  }

  return (
    <form
      className="w-full h-full flex flex-col items-center justify-center"
      onSubmit={(e): Promise<void> => signIn(e)}
    >
      <label>Username</label>
      <Input type="text" value={username} onChange={(e): void => setUsername(e.target.value)} />
      <label>Password</label>
      <Input type="password" value={password} onChange={(e): void => setPassword(e.target.value)} />
      <button type="submit">Log in</button>
    </form>
  )
}
