import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';
import { apiProducts } from '../api/interface';
import getProducts from '../api/api';
import { Container__Root} from './style';

const Home = () => {
    const [count, setCount] = useState<number>(0); //conta numero de produtos
    const [openSidebar, setOpenSidebar] = useState< true | false>(false); //abre e fecha carrinho
    const [itemProduct, setItemProduct] = useState<apiProducts[]>([]); //id dos produtos selecionados
    const [selectedItem, setSelectedItem] = useState<number>(1)
    const [products, setProducts] = useState<apiProducts[]>([]); //array com lista de productos

    useEffect(() => {
        getProducts()
            .then((res) => res.data)
            .then((data) => {
                const products = data.products;
                setProducts(products);
            })
            .catch((err) => console.log(err));
    }, []);

    // const changeCart = (product: { id: number; name: string; photo: string; price: string; }) => {
    //     const item = Array.from(itemProduct);
    //     item.push({
    //         id: product.id,
    //         name: product.name,
    //         photo: product.photo,
    //         price: product.price,
    //         quantity: selectedItem,
    //     });

    //     setItemProduct(item);
    //     setCount(count + 1);
    // };


    const changeCart = (product: {id: number; name: string; photo: string;  price: string; brand: string; description: string, quantity: number}) => {
        const item = Array.from(itemProduct)
        item.push({
            id: product.id,
            name: product.name,
            photo: product.photo,
            price: product.price,
            quantity: selectedItem,
            brand: '',
            description: '',
        });

        setItemProduct(item);
        setCount(count + 1);    
   }


   // console.log(itemProduct); //lista de produtos selecionados
  //  console.log(selectedItem);

  const updateCart = [{ id: 1,
    quantity: 2
  }]

  console.log(updateCart);
  
    
  const openSidebarCart = () => {
     openSidebar != true ? setOpenSidebar(true) : setOpenSidebar(false);
};

//____________________________consertar_________________________



    const handleAddItem = () => {
        setSelectedItem(selectedItem + 1)
       // console.log(selectedItem);
    };
    

    const handleRemoveItem = () => {
        alert("Excluir Item da lista de carrinho de compras")
    }
    //____________________________consertar_________________________

    const handleUpdateItem = () => {
        selectedItem <= 0 ? handleRemoveItem() :  setSelectedItem(selectedItem - 1)
    };

    const prices = itemProduct.map(function (item) {
        return Number(item.price);
    });
    
    let firstPrice = 0
    let totalPrice = 0
    prices.forEach(function (price) {
        prices.length <= 1 ? (totalPrice = price,  firstPrice = price) : (totalPrice = firstPrice + price, firstPrice = totalPrice);
    });
    
    function closeBuy(){
        alert("Compra finalizada com sucesso!")
    }

    return (
        <Container__Root>
            {openSidebar === true ? (
                <Sidebar
                    openSidebarCart={openSidebarCart} //abre sidebar
                    itemProduct={itemProduct} //id selecionado
                    changeCart={changeCart} //contador de produtos selecionados
                    products={products} //lista com todos os produtos
                    totalPrice= {totalPrice} // valor total do carrinho
                    handleRemoveItem={handleRemoveItem}
                    handleAddItem={handleAddItem} //adiciona item ao carrinho
                    handleUpdateItem={handleUpdateItem}
                    selectedItem={selectedItem}
                    closeBuy={closeBuy}
                />
            ) : null}
            <Navbar changeCart={count} openSidebarCart={openSidebarCart} />
            <ProductGrid changeCart={changeCart} products={products} />
            <Footer />
        </Container__Root>
    );
};

export default Home;
