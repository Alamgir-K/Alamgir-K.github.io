import Button from "@mui/material/Button";

import { CartProductType } from "../App";

import { Wrapper } from "./CartProduct.styles";

type Props = {
    product: CartProductType;
    addToCart: (clickedProduct: CartProductType) => void;
    removeFromCart: (id: number) => void;
}

const CartProduct: React.FC<Props> = ({ product, addToCart, removeFromCart }) => {
    return (
        <Wrapper>
            <img src={product.image} alt={product.title} />
            <div>
                <h3>{product.title}</h3>
                <p>Price: ${(product.quantity * product.price).toFixed(2)}</p>

                <div className="PriceButton">
                    <Button size="small" disableElevation variant="contained" onClick={() => removeFromCart(product.id)}>
                        -
                    </Button>

                    <p>{product.quantity}</p>

                    <Button size="small" disableElevation variant="contained" onClick={() => addToCart(product)}>
                        +
                    </Button>

                </div>
            </div>

        </Wrapper>
    )
}


export default CartProduct