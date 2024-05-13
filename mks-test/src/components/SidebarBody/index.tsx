import Item from '../Item';
import {
    Container__SidebarBody,
    Container__SidebarBody__Empty,
    Container__SidebarBody__Limit,
} from './style';

const SidebarBody = ({
    changeCart,
    itemProduct,
    products,
    handleRemoveItem,
    handleAddItem,
    handleUpdateItem,
    selectedItem,
}) => {
    return (
        <Container__SidebarBody__Limit>
            {itemProduct.length === 0 ? (
                <Container__SidebarBody__Empty>
                    <span>Carrinho de compras vazio.</span>
                </Container__SidebarBody__Empty>
            ) : (
                itemProduct.map((product, index) => (
                    <Container__SidebarBody key={index}>
                       {/* {console.log(index)}  */}
                        
                        <Item
                            product={product}
                            changeCart={changeCart}
                            products={products}
                            handleRemoveItem={handleRemoveItem}
                            handleAddItem={handleAddItem}
                            handleUpdateItem={handleUpdateItem}
                            selectedItem={selectedItem}
                        />
                    </Container__SidebarBody>
                ))
            )}
        </Container__SidebarBody__Limit>
    );
};

export default SidebarBody;
