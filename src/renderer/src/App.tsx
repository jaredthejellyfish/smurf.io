import Navigation from './components/navigation'
import { RouterProvider, Route } from './components/router'
import { ThemeProvider } from './components/theme-provider'
import supabase from './lib/supabase'
import AuthPage from './auth-page'
import SettingsPage from './pages/settings'
import HomePage from './pages/home'
import DebugPage from './pages/debug'
import useAuth from './lib/hooks/useAuth'
import UserProvider from './components/user-provider'

function App(): JSX.Element {
  const { user, isLoading, error } = useAuth()

  if (user) {
    return (
      <UserProvider user={user}>
        <ThemeProvider>
          <RouterProvider>
            <Navigation />
            <main className="px-3">
              <Route path="/" component={<HomePage />} />
              <Route path="/settings" component={<SettingsPage />} />
              <Route path="/debug" component={<DebugPage />} />
            </main>
          </RouterProvider>
        </ThemeProvider>
      </UserProvider>
    )
  } else if (isLoading && !error) {
    return (
      <ThemeProvider>
        <p>Loading</p>
      </ThemeProvider>
    )
  } else {
    return (
      <ThemeProvider>
        <AuthPage client={supabase} />
      </ThemeProvider>
    )
  }
}

export default App
