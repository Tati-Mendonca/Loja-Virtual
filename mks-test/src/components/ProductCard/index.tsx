import Button from '../Button';
import { ProductCard__Container } from './style';
import { motion } from 'framer-motion';

const parent = {
    variantA: { scale: 1 },
    variantB: { scale: 1.1 },
};

const ProductCard = ({ changeCart, products }) => {
    return products.map((product) => (
            
            <ProductCard__Container
                key={product.id}
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
                            {/* {' '} */}
                            <span>R${Number(product.price)}</span>
                        </li>
                    </ol>
                    <p>
                        <span>{product.description}</span>
                    </p>
                </div>
                <Button onClick={() => changeCart(product)}>
                    COMPRAR
                </Button>
            </ProductCard__Container>
       
    ));
};

export default ProductCard;
