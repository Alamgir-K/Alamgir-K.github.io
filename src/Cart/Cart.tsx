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

    function getPricingInfo(products: CartProductType[]) {
        const cartTotal = getCartTotalPrice(products)
        if (cartTotal > 0) {
            return (
                <div>
                    <h4>Subtotal: ${cartTotal.toFixed(2)}</h4>
                    <h4>Tax: ${((cartTotal * 1.13) - cartTotal).toFixed(2)}</h4>
                    <h3>Total <span>(after tax)</span>: ${(cartTotal * 1.13).toFixed(2)}</h3>
                </div>
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

            {getPricingInfo(cartProducts)}

        </Wrapper>
    )
};

export default Cart