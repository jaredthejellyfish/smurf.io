import { useContext } from 'react'
import { RouterContext } from '../router/router-provider'

const Link = ({ href, children }: { href: string; children: JSX.Element }): JSX.Element => {
  const { setRoute } = useContext(RouterContext)

  const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    console.log(event)
    event.preventDefault()
    setRoute(href)
  }

  return <a onClick={(e): void => onClick(e)}>{children}</a>
}

export default Link
