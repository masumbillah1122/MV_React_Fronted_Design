import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const SellerInfo = () => {
  return (
    <div className="seller-row">
      <div className="seller-col">
        <div className="seller-info">
          <div className="seller-header">
            <img src="./assets/images/sellers/js.png" alt="" />
          </div>
          <div className="seller-body">
            <span>Khan Haque</span>
            <span>khan@gmail.com</span>
            <span>+304092051</span>
            <span>Uttara Dhaka-1230</span>
                  </div>
                  <div className="seller-footer">
                      <span className="follow">Follow</span>
                  </div>
        </div>
      </div>
      <div className="seller-col">
        <h2 className="seller-title">All Products of the Seller Khan Haque</h2>
        <div className="seller-products">
          <div className="filter-cards">
            <div className="filter-card">
              <div className="card-header">
                <img src="./assets/images/products/1.png" alt="" />
              </div>
              <div className="card-body">
                <Link to="/">
                  Watermelon <FontAwesomeIcon icon={faEye} />
                </Link>
                <span className="category">Fruit</span>
                <span className="price">$1.20/kg</span>
              </div>
              <div className="card-footer">
                <button>Add To Bag</button>
              </div>
            </div>
            <div className="filter-card">
              <div className="card-header">
                <img src="./assets/images/products/2.png" alt="" />
              </div>
              <div className="card-body">
                <Link to="/">
                  Broccoli <FontAwesomeIcon icon={faEye} />
                </Link>
                <span className="category">Vegetable</span>
                <span className="price">$0.95/kg</span>
              </div>
              <div className="card-footer">
                <button>Add To Bag</button>
              </div>
            </div>
            <div className="filter-card">
              <div className="card-header">
                <img src="./assets/images/products/1.png" alt="" />
              </div>
              <div className="card-body">
                <Link to="/">
                  Watermelon <FontAwesomeIcon icon={faEye} />
                </Link>
                <span className="category">Fruit</span>
                <span className="price">$1.20/kg</span>
              </div>
              <div className="card-footer">
                <button>Add To Bag</button>
              </div>
            </div>
            <div className="filter-card">
              <div className="card-header">
                <img src="./assets/images/products/2.png" alt="" />
              </div>
              <div className="card-body">
                <Link to="/">
                  Broccoli <FontAwesomeIcon icon={faEye} />
                </Link>
                <span className="category">Vegetable</span>
                <span className="price">$0.95/kg</span>
              </div>
              <div className="card-footer">
                <button>Add To Bag</button>
              </div>
            </div>
            <div className="filter-card">
              <div className="card-header">
                <img src="./assets/images/products/1.png" alt="" />
              </div>
              <div className="card-body">
                <Link to="/">
                  Watermelon <FontAwesomeIcon icon={faEye} />
                </Link>
                <span className="category">Fruit</span>
                <span className="price">$1.20/kg</span>
              </div>
              <div className="card-footer">
                <button>Add To Bag</button>
              </div>
            </div>
            <div className="filter-card">
              <div className="card-header">
                <img src="./assets/images/products/2.png" alt="" />
              </div>
              <div className="card-body">
                <Link to="/">
                  Broccoli <FontAwesomeIcon icon={faEye} />
                </Link>
                <span className="category">Vegetable</span>
                <span className="price">$0.95/kg</span>
              </div>
              <div className="card-footer">
                <button>Add To Bag</button>
              </div>
            </div>
          </div>
          <div className="filter-pagination">
            <ul>
              <li>
                <Link to="#">Prev</Link>
              </li>
              <li className="pagi-active">
                <Link to="#">1</Link>
              </li>
              <li>
                <Link to="#">Next</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerInfo