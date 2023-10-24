import { createContext, useState } from 'react'

const RouterContext = createContext({
  setRoute: (route: string): void => {
    console.log(route)
  },
  route: '/'
})

const RouterProvider = ({ children }: { children: JSX.Element[] }): JSX.Element => {
  const [route, setRoute] = useState<string>('/')

  return (
    <RouterContext.Provider value={{ setRoute, route: route }}>{children}</RouterContext.Provider>
  )
}

export default RouterProvider

export { RouterContext }
