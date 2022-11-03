import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCESS':
      return { ...state, product: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}


function ProductScreen() {
    const params = useParams()
    const {slug}= params
    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
      product: [],
      loading: true,
      error: '',
    })
    useEffect(() => {
      const fetchData = async () => {
        dispatch({ type: 'FETCH_REQUEST' })
        try {
          const result = await axios.get(`/api/products/slug/${slug}`)
          dispatch({ type: 'FETCH_SUCESS', payload: result.data })
        } catch (err) {
          dispatch({ type: 'FETCH_FAIL', payload: err.message })
        }
      }
      fetchData()
    }, [slug])

    return (
   loading? <div> loading</div> 
   : error? <div>{error} </div>
  : <div>
    {product.name}
  </div>
  )
}

export default ProductScreen