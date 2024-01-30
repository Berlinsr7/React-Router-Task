import React from 'react'

function Card({name, description, image}) {
  const date = new Date().toDateString();
  return (
  <div class="col-lg-4 col-md-6 mt-3">
    <div class="card h-100">
      <img src={image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description}</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">{date} . No Comments</small>
      </div>
    </div>
  </div>
  )
}

export default Card