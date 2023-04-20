import React from 'react'

export default function CardProduct(
  { index, title, description, img }
) {
  return (
    <>
      <div class="card col-4 " style={{ width: "350px", margin: "10px" }} key={index}>
        <img src={img} style={{ width: "100%", height: "180px" }} />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  )
}
