import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Filter = () => {
  return (
    <div className="filter-row">
      <div className="filter-col">
        <div className="filter-group">
          <button>All</button>
          <button>Fruits</button>
          <button>Vegetables</button>
        </div>
        <div className="filter-group">
          <input type="search" placeholder="Search..." />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className="filter-col">
        <div className="filter-cards">
          <div className="filter-card">
            <div className="card-header">
              <img src="./assets/images/products/1.png" alt="" />
              <Link to="/">
                <img
                  className="card-sellers"
                  src="./assets/images/sellers/seller.png"
                  alt=""
                />
              </Link>
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
              <Link to="/">
                <img
                  className="card-sellers"
                  src="./assets/images/sellers/seller.png"
                  alt=""
                />
              </Link>
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
              <Link to="/">
                <img
                  className="card-sellers"
                  src="./assets/images/sellers/seller.png"
                  alt=""
                />
              </Link>
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
              <Link to="/">
                <img
                  className="card-sellers"
                  src="./assets/images/sellers/seller.png"
                  alt=""
                />
              </Link>
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
              <Link to="/">
                <img
                  className="card-sellers"
                  src="./assets/images/sellers/ja.jpg"
                  alt=""
                />
              </Link>
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
              <Link to="/">
                <img
                  className="card-sellers"
                  src="./assets/images/sellers/seller.png"
                  alt=""
                />
              </Link>
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
  );
}

export default Filter