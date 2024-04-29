import { Container, Shop, Name } from './style';
import { FaCartShopping } from 'react-icons/fa6';

const Navbar = ({ openCartSidebar }) => {
    return (
        <Container>
            <Name>
                MKS<span>Sistemas</span>
            </Name>
            <Shop>
                <FaCartShopping />
                <span>{openCartSidebar}</span>
            </Shop>
        </Container>
    );
};

export default Navbar;
