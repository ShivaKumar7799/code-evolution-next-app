import React from 'react'
import { useRouter } from 'next/router'
function ReviewId() {
  const router = useRouter()
  const {productid, reviewid} = router.query

  return (
    <div>
      <h1> Review : {reviewid} and Product : {productid} </h1>
    </div>
  )
}

export default ReviewId