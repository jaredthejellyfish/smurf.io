import { useContext } from 'react'
import { RouterContext } from './router-provider'

const Route = ({ path, component }: { path: string; component: JSX.Element }): JSX.Element => {
  const { route } = useContext(RouterContext)

  if (route === path) {
    return component
  }

  return <></>
}

export default Route
