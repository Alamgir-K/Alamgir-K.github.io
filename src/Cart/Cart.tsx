import CartProduct from "../CartProduct/CartProduct";

import { CartProductType } from "../App";

import { Wrapper } from "./Cart.styles";

import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";

type Props = {
    cartProducts: CartProductType[];
    addToCart: (clickedProduct: CartProductType) => void
    removeFromCart: (id: number) => void;
    handleCloseCart: (state: boolean) => void
}

const Cart: React.FC<Props> = ({ cartProducts, addToCart, removeFromCart, handleCloseCart }) => {
    var cartTotal = getCartTotalPrice(cartProducts)

    function setCartTotalDiscount(discount: number) {
        cartTotal = cartTotal * (1 - discount)
    }

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

    function getPricingInfo(total: number) {
        return (
            <div className="Pricing">
                <h4>Subtotal: ${total.toFixed(2)}</h4>
                <h4>Tax: ${((total * 1.13) - total).toFixed(2)}</h4>
                <h3>Total <span>(after tax)</span>: ${(total * 1.13).toFixed(2)}</h3>
            </div>
        )
    }

    function getDiscountButtons() {
        return (
            <div className="DiscountButton">
                <Button size="small" disableElevation variant="contained" color="success" onClick={() => setCartTotalDiscount(0.1)}>
                    10% Off
                </Button>

                <Button size="small" disableElevation variant="contained" color="success" onClick={() => setCartTotalDiscount(0.15)}>
                    15% Off
                </Button>

                <Button size="small" disableElevation variant="contained" color="success" onClick={() => setCartTotalDiscount(0.2)}>
                    20% Off
                </Button>

            </div>
        )
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

            {cartTotal > 0 ? getPricingInfo(cartTotal) : null}

            {cartTotal > 0 ? getDiscountButtons() : null}

        </Wrapper>
    )
};

export default Cart