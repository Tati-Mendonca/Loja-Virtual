import { Container__product } from './style';

const Item = ({ product, handleAddItem, selectedItem, handleUpdateItem }) => {

    //console.log(product);
    
    return (
        <>
            <Container__product>
                <div className="product__description">
                    <img src={product.photo} alt={product.name} />
                    <li>{product.name}</li>
                </div>
                <div className="product__price">
                    <div className="amount">
                        <li className="amount-item">Qtd:</li>
                        <div className="btn-item">
                            <button onClick={handleUpdateItem}>-</button>
                            <span>{product.quantity}</span>
                            <button onClick={handleAddItem}>+</button>
                        </div>
                    </div>
                    <div>
                        <li className="price-item">
                            R$ {Number(product.price)}
                        </li>
                    </div>
                </div>
            </Container__product>
        </>
    );
};

export default Item;
