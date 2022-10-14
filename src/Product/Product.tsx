import Button from "@mui/material/Button";

import { CartProductType } from "../App";

import { Wrapper } from "./Product.styles";

type Props = {
    product: CartProductType
    handleAddToCart: (clickedproduct: CartProductType) => void;
}

const Product: React.FC<Props> = ({ product, handleAddToCart }) => (
    <Wrapper>
        <img src={product.image} alt={product.title}></img>

        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
        </div>

        <Button variant="contained" onClick={() => handleAddToCart(product)}>Purchase</Button>
    </Wrapper>
)

export default Product