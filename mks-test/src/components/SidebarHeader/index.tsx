import { IoCloseSharp } from 'react-icons/io5';
import { SidebarHeader__Container } from './style';

const SidebarHeader = () => {

    return (
        <SidebarHeader__Container>
            <h1>Carrinho de compras</h1>
            <IoCloseSharp />
        </SidebarHeader__Container>
    );
};

export default SidebarHeader;
