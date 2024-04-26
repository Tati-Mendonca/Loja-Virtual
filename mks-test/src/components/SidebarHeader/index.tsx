import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { SidebarHeader__Container } from './style';

const SidebarHeader = () => {

    const handleClose = () =>{
        alert("Fechar Sidebar")
    }

  return (
    <SidebarHeader__Container>
      <h1>Carrinho de compras</h1>
      <IoCloseSharp onClick={handleClose} />
    </SidebarHeader__Container>
  )
}

export default SidebarHeader
