import { ProductGrid__Container } from './style';
import ProductCard from '../ProductCard';

const ProductGrid = ({ changeCart, products }) => {
    return (
        <ProductGrid__Container>
            <aside>
                <ProductCard changeCart={changeCart} products={products} />
            </aside>
        </ProductGrid__Container>
    );
};

export default ProductGrid;

{
    /* <ProductGrid__Container>
                <ProductCard changeCart={changeCart} products={products} />
            </ProductGrid__Container>
        <ProductGrid__Container />
     */
}
