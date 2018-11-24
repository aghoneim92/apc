import * as React from 'react'
import { MouseEvent } from 'react'

import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap'

import logo from './logo.png'

export interface NavbarItem {
  path: string
  label: string
  onClick(e: MouseEvent<HTMLAnchorElement>): void
}

interface NavBarProps {
  pathname: string
  items: NavbarItem[]
}

export const NavBar = ({ pathname, items }: NavBarProps) => (
  <Navbar className="noprint" light expand="md">
    <NavbarBrand href="/">
      <img className="App-logo" src={logo} />
    </NavbarBrand>
    <div className="push-1">
      <div>مستشفى دار الإسكندرية للإستشفاء</div>
    </div>
    <Nav className="ml-auto noprint" navbar>
      {items.map(({ path, label, onClick }, index) => (
        <NavItem key={path}>
          <NavLink
            href={`/${path}`}
            active={
              (index === 0 && pathname === '/') || pathname.includes(path)
            }
            onClick={onClick}
          >
            {label}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  </Navbar>
)
