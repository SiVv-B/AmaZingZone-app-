import React, { useState, useEffect, useReducer } from 'react'
//import data from '../data'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import Product from '../components/Product'
import { Helmet } from 'react-helmet-async'

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCESS':
      return { ...state, products: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  })
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const result = await axios.get('/api/products')
        dispatch({ type: 'FETCH_SUCESS', payload: result.data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message })
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      <Helmet>
        <title>
        ✨AmazonSiv✨
        </title>
      </Helmet>
      <h1>List of products</h1>
      <div className="products">
        {loading ? (
          <div>...loading ⌛</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Row>
            {products.map((product) => (
              <Col sm={6} md={4} lg={3} 
              className='mb-3'
              key={product.slug}>
            <Product product={product}/>
            </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  )
}

export default HomeScreen
