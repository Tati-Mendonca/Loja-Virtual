import { ProductGrid__Container } from './style';
import ProductCard from '../ProductCard';

const ProductGrid = ({ changeCart, products }) => {    
    return (
        <ProductGrid__Container>
            <ProductCard changeCart={changeCart} products={products} />
        </ProductGrid__Container>
    );
};

export default ProductGrid;
