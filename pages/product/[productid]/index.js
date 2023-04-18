import React from 'react'
import { useRouter } from 'next/router'
function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productid;
  return (
    <div>
      Details about product {productId}
    </div>
  )
}

export default ProductDetail