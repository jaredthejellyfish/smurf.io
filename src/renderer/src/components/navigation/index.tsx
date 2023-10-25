import Link from '../link'
import { ModeToggle } from './mode-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar'
import { FileWarning, Github, Keyboard, LogOut, Menu, Settings, User } from 'lucide-react'

import { Button } from '../../components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '../../components/ui/dropdown-menu'
import useUser from '@renderer/lib/hooks/useUser'

const Navigation = (): JSX.Element => {
  const { user } = useUser()
  return (
    <nav className="h-14 dark:bg-neutral-950 flex flex-row items-center px-3 justify-between shadow border dark:border-b-neutral-800 mb-2 border-transparent">
      <div className="flex flex-row items-center gap-3">
        <Avatar>
          <AvatarImage src={user.avatar_url || 'https://github.com/shadcn.png'} />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>
        <span className="font-semibold">{user.username}</span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <ModeToggle className="" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-10 p-0">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-3 mt-0.5">
            <DropdownMenuGroup>
              <Link href="/">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Home</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              <Link href="/settings">
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                <Keyboard className="mr-2 h-4 w-4" />
                <span>Keyboard shortcuts</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <a href="https://github.com/jaredthejellyfish" target="#">
              <DropdownMenuItem>
                <Github className="mr-2 h-4 w-4" />
                <span>GitHub</span>
              </DropdownMenuItem>
            </a>
            <Link href="/debug">
              <DropdownMenuItem>
                <FileWarning className="mr-2 h-4 w-4" />
                <span>Debug</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default Navigation
