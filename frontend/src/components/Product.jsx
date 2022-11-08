import axios from 'axios'
import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Store } from '../Store'
import Rating from './Rating'

function Product({ product }) {
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const {
    cart: { cartItems },
  } = state

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id)
    const quantity = existItem ? existItem.quantity + 1 : 1
    const { data } = await axios.get(`/api/products/${item._id}`)
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock')
      return
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    })
  }
  return (
    <Card className="product">
      <Link to={`/product/${product.slug}`}>
        <img className="card-img-top" src={product.image} alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <div className="product-info">
          <Rating raiting={product.rating} numReviews={product.numReviews} />
          <Card.Text>{product.price} $</Card.Text>

          {product.countInStock === 0 ? (
            <Button variant="light" disabled>
              {' '}
              Out of Stock{' '}
            </Button>
          ) : (
            <Button onClick={() => addToCartHandler(product)}>
              Add to cart 🛒
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default Product
