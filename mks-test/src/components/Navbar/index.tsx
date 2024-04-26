import React from 'react'
import { Container, Shop, Name } from './style';

import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <Container>
        <Name>MKS<span>Sistemas</span></Name>
        <Shop><FaCartShopping />
        <span>0</span>
        </Shop>
    </Container>
  )
}

export default Navbar
