import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate();
  const getProducts = async () => {
    const fetchProducts = await fetch(`https://fakestoreapi.com/products`);
    const data = await fetchProducts.json();
    console.log(data);
    setProducts(data)


  }
  useEffect(() => {
    getProducts()

  }, [])

  const showDetail = (cardDetails) => {
    let id = cardDetails.id
    navigate(`user/${id}`)
  }

  return (
      <div className='all_products'>
        {products.length > 0 ? products.map((el, idx) => {
          return ( 
            <div className="product_container" key={idx} onClick={() => showDetail(el)} >
              <img src={el?.image} alt='Image could not load!' />

              <h1>{el.title}</h1>
              <h2>{el.price}</h2>

              <p>Rating: {el.rating.rate}</p>
              <p>Total reviews: {el.rating.count}</p>
            </div>
          )
            
        }) : <p>Loading...</p>}
      </div>
  )
}

export default Products;