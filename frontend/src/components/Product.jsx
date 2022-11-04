import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function Product({ product }) {
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
        <Rating raiting={product.rating} numReviews={product.numReviews}/>
          <Card.Text>{product.price} $</Card.Text>
          <Button>Add to cart 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Product
