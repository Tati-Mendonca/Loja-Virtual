import { ProductGrid__Container } from './style';
import ProductCard from '../ProductCard';

const ProductGrid = ({ openCartSidebar }) => {
    return (
        <ProductGrid__Container>
            <ProductCard openCartSidebar={openCartSidebar} />
        </ProductGrid__Container>
    );
};

export default ProductGrid;
