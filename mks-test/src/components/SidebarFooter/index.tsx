import React from 'react'
import { SidebarFotter } from './style'
import Button from '../Button'

const SidebarFooter = () => {
  return (
    <SidebarFotter>
      <Button Text="Finalizar Compra" onClick={undefined} Type={Button}></Button>
    </SidebarFotter>
  )
}

export default SidebarFooter
