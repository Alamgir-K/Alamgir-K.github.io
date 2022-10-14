import CartProduct from "../CartProduct/CartProduct";

import { CartProductType } from "../App";

import { Wrapper } from "./Cart.styles";

import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

type Props = {
    cartProducts: CartProductType[];
    addToCart: (clickedProduct: CartProductType) => void
    removeFromCart: (id: number) => void;
    handleCloseCart: (state: boolean) => void
}

const Cart: React.FC<Props> = ({ cartProducts, addToCart, removeFromCart, handleCloseCart }) => {
    function getCartTotalPrice(products: CartProductType[]) {
        var total = 0;

        for (const product of products) {
            total += product.quantity * product.price;
        }

        return total
    }

    function isCartEmpty(products: CartProductType[]) {
        if (products.length === 0) {
            return (
                <p>No products found</p>
            )
        }
        return null
    }

    return (
        <Wrapper>
            <div className="CartHeader">
                <h2>Shopping Cart</h2>
                <IconButton onClick={() => handleCloseCart(false)}>
                    <CloseIcon />
                </IconButton>
            </div>

            {isCartEmpty(cartProducts)}

            {cartProducts.map(product => (
                <CartProduct key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} />
            ))}

            <h2>Total: ${getCartTotalPrice(cartProducts).toFixed(2)}</h2>
        </Wrapper>
    )
};

export default Cart