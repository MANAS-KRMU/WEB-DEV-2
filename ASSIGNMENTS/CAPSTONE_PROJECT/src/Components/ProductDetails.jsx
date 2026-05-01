import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductsDetails = () => {
  
  const [products, setProducts] = useState([])
  const id = useParams()
  console.log(id);
  const getProducts = async () => {
    const fetchProducts = await fetch(`https://fakestoreapi.com/products/${id.id}`);
    const data = await fetchProducts.json();
    console.log("Product Details",data);
    setProducts(data)


  }
  useEffect(() => {
    getProducts()

  }, [])
  return (
      <div> 
        {
            <div className="product_container" >
              <img src={products?.image} alt='Image could not load!' />

              <h1>{products.title}</h1>
              <h2>{products.price}</h2>

              {/* <p>Rating: {products.rating.rate}</p> */}
              {/* <p>Total reviews: {products.rating.count}</p> */}
            </div>
         }
      </div>
  )
}

export default ProductsDetails;