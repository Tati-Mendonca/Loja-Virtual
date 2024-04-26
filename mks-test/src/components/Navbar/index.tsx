import React from 'react'
import { Container, Shop, Logo } from './style';

import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <Container>
        <Logo>MKS</Logo>
        <Shop><FaCartShopping />
        <span>0</span>
        </Shop>
    </Container>
  )
}

export default Navbar
