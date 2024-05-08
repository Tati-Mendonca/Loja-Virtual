import { Container__product } from './style';

const Item = ({ product }) => {
   // console.log(product); //um objeto com item selecionado

    // console.log(product[0].id);
    const qnt = 1;

    return (
        <>
            <Container__product>
                <div className='product__description'>
                <img src={product.photo} alt={product.name} />
                <li>{product.name}</li>
                </div>
                <div className='product__price'>
                <div className='amount'>
                <li className="amount-item">Qtd:</li>
                    <div className="btn-item">
                        <button>-</button>
                        <span>{qnt}</span>
                        <button>+</button>
                    </div>
                </div>
                <div>
                <li className="price-item">R$ {Number(product.price)}</li>
                </div>
                </div>
            </Container__product>
        </>
    );
};

export default Item;
