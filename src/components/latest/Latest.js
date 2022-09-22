import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Latest = () => {
  return (
    <div className="latest-row">
      <div className="latest-col">
        <h2>New Fresh Products</h2>
        <div className="latest-products">
          <div className="latest-group">
            <div className="latest-header">
              <img src="./assets/images/products/1.png" alt="" />
              
            </div>
            <div className="latest-body">
              <Link to="/">
                Watermelon <FontAwesomeIcon icon={faEye} />
              </Link>
              <span className="category">Fruit</span>
              <span className="price">$1.20/kg</span>
            </div>
          </div>
          <div className="latest-group">
            <div className="latest-header">
              <img src="./assets/images/products/2.png" alt="" />
              
            </div>
            <div className="latest-body">
              <Link to="/">
                Broccoli <FontAwesomeIcon icon={faEye} />
              </Link>
              <span className="category">Vegetable</span>
              <span className="price">$0.95/kg</span>
            </div>
          </div>
        </div>
      </div>
      <div className="latest-col">
        <h2>We Provide support to newly registered sellers</h2>
        <div className="latest-sellers">
          <div className="sellers-group">
            <div className="sellers-header">
              <img src="./assets/images/sellers/ja.jpg" alt="" />
            </div>
            <div className="sellers-body">
              <Link to="/">
                Admin <FontAwesomeIcon icon={faEye} />
              </Link>
              <span className="follow">Follow</span>
              <span className="date">Member Since: 19.09.2022</span>
            </div>
          </div>
          <div className="sellers-group">
            <div className="sellers-header">
              <img src="./assets/images/sellers/seller.png" alt="" />
            </div>
            <div className="sellers-body">
              <Link to="/">
                User <FontAwesomeIcon icon={faEye} />
              </Link>
              <span className="follow">Follow</span>
              <span className="date">Member Since: 19.09.2022</span>
            </div>
          </div>
          <div className="sellers-group">
            <div className="sellers-header">
              <img src="./assets/images/sellers/seller.png" alt="" />
            </div>
            <div className="sellers-body">
              <Link to="/">
                User <FontAwesomeIcon icon={faEye} />
              </Link>
              <span className="follow">Follow</span>
              <span className="date">Member Since: 19.09.2022</span>
            </div>
          </div>
          <div className="sellers-group">
            <div className="sellers-header">
              <img src="./assets/images/sellers/seller.png" alt="" />
            </div>
            <div className="sellers-body">
              <Link to="/">
                User <FontAwesomeIcon icon={faEye} />
              </Link>
              <span className="follow">Follow</span>
              <span className="date">Member Since: 19.09.2022</span>
            </div>
          </div>
          <div className="sellers-group">
            <div className="sellers-header">
              <img src="./assets/images/sellers/seller.png" alt="" />
            </div>
            <div className="sellers-body">
              <Link to="/">
                User <FontAwesomeIcon icon={faEye} />
              </Link>
              <span className="follow">Follow</span>
              <span className="date">Member Since: 19.09.2022</span>
            </div>
          </div>
          <div className="sellers-group">
            <div className="sellers-header">
              <img src="./assets/images/sellers/seller.png" alt="" />
            </div>
            <div className="sellers-body">
              <Link to="/">
                User <FontAwesomeIcon icon={faEye} />
              </Link>
              <span className="follow">Follow</span>
              <span className="date">Member Since: 19.09.2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Latest
