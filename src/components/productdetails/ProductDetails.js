import React from 'react'
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  return (
    <div className="product-row">
      <div className="product-col">
        <img src="./assets/images/products/2.png" alt="" />
        <Link to="/">
          <img className='seller-product' src="./assets/images/sellers/ja.jpg" alt="" />
        </Link>
      </div>
      <div className="product-col">
        <div className="product-info">
          <h2 className="product-title">Broccoli</h2>
          <span className="category">Vegetables</span>
        </div>
        <div className="product-info">
          <span className="price">Price: $0.95/kg</span>
          <span className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium culpa, tenetur sint aspernatur ullam numquam odio magni
            aliquid modi cumque quos delectus nihil tempore, fuga pariatur
            cupiditate, nemo rerum esse.
          </span>
        </div>
        <div className="product-add">
          <button>Add to Bag</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails