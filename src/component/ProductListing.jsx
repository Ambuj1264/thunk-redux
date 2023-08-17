import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/action';
const ProductListing = () => {
    const dispatch= useDispatch()
    const product =useSelector(state=>state.product)
    console.log(product.product);
        useEffect(()=>{
            dispatch(fetchProducts())
        },[dispatch])
  return (
    
    <div className="container">
           
    </div>
  )
}

export default ProductListing