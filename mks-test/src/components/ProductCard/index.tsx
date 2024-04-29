import Button from '../Button';
import { ProductCard__Container } from './style';
import { motion } from 'framer-motion';
import getProducts from '../../api/api';
import { useEffect, useState } from 'react';
import { apiProducts } from '../../api/interface';

const parent = {
    variantA: { scale: 1 },
    variantB: { scale: 1.1 },
};

const ProductCard = ({ openCartSidebar }) => {
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

    return products.map((product) => (
        <li key={product.id}>
            <ProductCard__Container
                as={motion.div}
                variants={parent}
                initial="variantA"
                whileHover="variantB"
            >
                <img className="img-product" src={product.photo} alt="" />
                <div className="boxCard">
                    <ol>
                        <li>{product.name}</li>
                        <li>
                            {' '}
                            <span>R${Number(product.price)}</span>
                        </li>
                    </ol>
                    <p>
                        <span>{product.description}</span>
                    </p>
                </div>
                <Button onClick={() => openCartSidebar(product.id)}>
                    COMPRAR
                </Button>
            </ProductCard__Container>
        </li>
    ));
};

export default ProductCard;
