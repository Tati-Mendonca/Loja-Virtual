import { Container, Shop, Name } from './style';
import { FaCartShopping } from 'react-icons/fa6';

const Navbar = ({ changeCart, openSidebarCart }) => {     
    return (
        <Container>
            <Name>
                MKS<span>Sistemas</span>
            </Name>
            <Shop onClick={openSidebarCart}>
                <FaCartShopping />
                <span>{changeCart}</span>
            </Shop>
        </Container>
    );
};

export default Navbar;
