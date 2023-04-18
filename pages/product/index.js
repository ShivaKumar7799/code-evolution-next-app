import React from 'react'
import Link from 'next/link'
function ProductList() {
  const products = ["product 1", "product 2", "product 3"]
  return (
    <div>
      <Link href= "/">
        Home
      </Link>
     <h1> Product List </h1>
      {products.map((item,index) => <Link replace href={`product/${index+1}`} ><p key={index} > {item} </p></Link> )}
    </div>
  )
}

export default ProductList