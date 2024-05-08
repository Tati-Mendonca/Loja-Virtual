import { useState } from 'react';
import Item from '../Item';
import { Container__SidebarBody, Container__SidebarBody__Empty } from './style';

const SidebarBody = ({ changeCart, itemProduct, products }) => {

   // console.log(products); a estrutura de products e product estão iguais

  // console.log(itemProduct);
   
    return itemProduct.length === 0 ? (
        <Container__SidebarBody__Empty>
            Carrinho de compras vazio.
        </Container__SidebarBody__Empty>
    ) : (
        itemProduct.map(
            (product) => (
                <Container__SidebarBody key={product.id}>
                    <Item
                        product={product}
                        changeCart={changeCart}
                        products={products}
                    />
                </Container__SidebarBody>
                
            )

        )
    );
};

export default SidebarBody;
