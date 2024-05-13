import SidebarFooter from '../SidebarFooter';
import SidebarHeader from '../SidebarHeader';
import { Sidebar__Container } from './style';
import SidebarBody from '../SidebarBody';

const Sidebar = ({
    openSidebarCart,
    changeCart,
    itemProduct,
    products,
    totalPrice,
    handleRemoveItem,
    handleAddItem,
    selectedItem,
    handleUpdateItem,
}) => {
    
    return (
        <Sidebar__Container>
            <SidebarHeader openSidebarCart={openSidebarCart} />
            <SidebarBody
                changeCart={changeCart}
                itemProduct={itemProduct}
                products={products}
                handleRemoveItem={handleRemoveItem}
                selectedItem={selectedItem}
                handleAddItem={handleAddItem}
                handleUpdateItem={handleUpdateItem}
            />
            <div className="total__price">
                <p>Total:</p>
                <span>R${totalPrice}</span>
            </div>

            <SidebarFooter />
        </Sidebar__Container>
    );
};

export default Sidebar;
