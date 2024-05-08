import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';
import { apiProducts } from '../api/interface';
import getProducts from '../api/api';

const Home = () => {
    const [count, setCount] = useState(0); //conta numero de produtos
    const [openSidebar, setOpenSidebar] = useState(false); //abre e fecha carrinho
    const [itemProduct, setItemProduct] = useState([]); //id dos produtos selecionados

    const [products, setProducts] = useState<apiProducts[]>([]);

    useEffect(() => {
        getProducts()
            .then((res) => res.data)
            .then((data) => {
                const products = data.products;
                setProducts(products);
            })
            .catch((err) => console.log(err));
    }, []);

    //console.log(products);

    const changeCart = (product) => {
        const item = Array.from(itemProduct);
        item.push({
            id: product.id,
            name: product.name,
            photo: product.photo,
            price: product.price,
        });

        //  console.log(item); //cada item selecionado recebe todas as info

        setItemProduct(item);
        setCount(count + 1);
    };

    //console.log(itemProduct); //retorna Array com id de produto selecionado

    const prices = itemProduct.map(function (item) {
        return Number(item.price);
    });
    
    let firstPrice = 0
    let totalPrice = 0
    prices.forEach(function (price) {
        prices.length <= 1 ? (totalPrice = price,  firstPrice = price) : (totalPrice = firstPrice + price, firstPrice = totalPrice);
    });
    console.log(totalPrice); //TEMOS A SOMA


    const openSidebarCart = () => {
        openSidebar != true ? setOpenSidebar(true) : setOpenSidebar(false);
    };

    const handleAddItem = () => {
        //adiciona
    };
    const handleRemoveItem = () => {
        //remove
    };
    const handleUpdateItem = () => {
        //alteração de qnt
    };

    return (
        <>
            {openSidebar === true ? (
                <Sidebar
                    openSidebarCart={openSidebarCart} //abre sidebar
                    itemProduct={itemProduct} //id selecionado
                    changeCart={changeCart} //contador de produtos selecionados
                    products={products} //lista com todos os produtos
                    totalPrice= {totalPrice}
                />
            ) : null}
            <Navbar changeCart={count} openSidebarCart={openSidebarCart} />
            <ProductGrid changeCart={changeCart} products={products} />
            <Footer />
        </>
    );
};

export default Home;
