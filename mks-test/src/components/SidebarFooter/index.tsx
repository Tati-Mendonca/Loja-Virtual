import { SidebarFotter } from './style';
import Button from '../Button';

const SidebarFooter = ({ closeBuy }) => {
    return (
        <SidebarFotter>
            <Button onClick={ closeBuy }>Finalizar compra</Button>
        </SidebarFotter>
    );
};

export default SidebarFooter;
