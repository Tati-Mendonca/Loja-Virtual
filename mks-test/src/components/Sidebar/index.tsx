import SidebarFooter from '../SidebarFooter';
import SidebarHeader from '../SidebarHeader';
import { Sidebar__Container } from './style';
import SidebarBody from '../SidebarBody';

const Sidebar = ({ openSidebarCart, changeCart, itemProduct, products, totalPrice }) => {

    return (
        <Sidebar__Container>
            <SidebarHeader openSidebarCart={openSidebarCart} />
            <SidebarBody
                changeCart={changeCart}
                itemProduct={itemProduct}
                products={products}
            />
               <div className="total__price">
                    <div>Total:</div>
                    <div>R${totalPrice}</div>
                </div>

            <SidebarFooter />
        </Sidebar__Container>
    );
};

export default Sidebar;
