import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarAdmin from './NavBarAdmin'

function AdminLayout() {
  return (
    <>
      <NavBarAdmin></NavBarAdmin>
      <Outlet></Outlet>
    </>
  )
}

export default AdminLayout
