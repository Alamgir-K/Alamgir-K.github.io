import { useState } from 'react'
import { useQuery } from 'react-query'

import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import Product from './Product/Product';
import Cart from './Cart/Cart';

import { Wrapper, CustomButton } from './App.styles';

export type CartProductType = {
  id: number
  title: string
  price: number
  description: string
  image: string
  quantity: number
}

async function getProducts(): Promise<CartProductType[]> {
  const request = await fetch('https://fakestoreapi.com/products');
  const request_json = await request.json();
  return request_json
}

function App() {
  const { data, isLoading, error } = useQuery<CartProductType[]>('products', getProducts)
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([] as CartProductType[]);

  function getTotalProductsInCart(products: CartProductType[]): number {
    var total = 0;

    for (const product of products) {
      total += product.quantity;
    }

    return total
  }

  function handleAddToCart(clickedProduct: CartProductType) {
    setCartProducts(previousState => {
      var isProductPresent = false;
      var products: CartProductType[] = []

      for (const product of previousState) {
        if (product.id === clickedProduct.id) {
          isProductPresent = true;
          product.quantity += 1;
        }
        products.push(product);
      }

      if (isProductPresent) {
        return products;
      }

      clickedProduct.quantity = 1;
      products.push(clickedProduct);
      return products;
    })
  }

  function handleRemoveFromCart(id: number) {
    var products: CartProductType[] = []

    setCartProducts(previousState => {

      for (const product of previousState) {
        if (product.id === id) {
          product.quantity -= 1;
        }

        if (product.quantity !== 0) {
          products.push(product);
        }
      }
      return products
    })
  }

  if (isLoading) {
    return <LinearProgress />
  }

  if (error) {
    <h1>Error in loading app</h1>
  }

  return (
    <Wrapper>
      <Drawer variant="temporary" anchor='right' open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Cart cartProducts={cartProducts} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} handleCloseCart={setIsCartOpen} />
      </Drawer>

      <CustomButton onClick={() => setIsCartOpen(true)}>

        <Badge badgeContent={getTotalProductsInCart(cartProducts)} color='primary'>
          <AddShoppingCartIcon />
        </Badge>

      </CustomButton>

      <Grid container spacing={4}>

        {data?.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Product product={product} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}

      </Grid>
    </Wrapper>
  );
}

export default App;
