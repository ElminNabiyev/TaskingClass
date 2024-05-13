import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarMain from './NavBarMain'

function MainLayout() {
  return (
    <>
      <NavBarMain></NavBarMain>
      <Outlet></Outlet>
    </>
  )
}

export default MainLayout
