import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SellFilters = () => {
  return (
    <div className="sell-fill-row">
      <div className="sell-fill-col">
        <input type="search" placeholder="Search..." />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="sell-fill-col">
        <div className="sell-fill-cards">
          <div className="sell-fill-group">
            <div className="sell-fill-header">
              <img src="./assets/images/sellers/seller.png" alt="" />
            </div>
            <div className="sell-fill-body">
              <Link to="/seller:id">
                User <FontAwesomeIcon icon={faEye} />
              </Link>
              <span className="follow">Follow</span>
              <span className="date">Member Since: 19.09.2022</span>
            </div>
          </div>
          <div className="sell-fill-group">
            <div className="sell-fill-header">
              <img src="./assets/images/sellers/seller.png" alt="" />
            </div>
            <div className="sell-fill-body">
              <Link to="/">
                User <FontAwesomeIcon icon={faEye} />
              </Link>
              <span className="follow">Follow</span>
              <span className="date">Member Since: 19.09.2022</span>
            </div>
          </div>
          <div className="sell-fill-group">
            <div className="sell-fill-header">
              <img src="./assets/images/sellers/seller.png" alt="" />
            </div>
            <div className="sell-fill-body">
              <Link to="/">
                User <FontAwesomeIcon icon={faEye} />
              </Link>
              <span className="follow">Follow</span>
              <span className="date">Member Since: 19.09.2022</span>
            </div>
          </div>
          <div className="sell-fill-group">
            <div className="sell-fill-header">
              <img src="./assets/images/sellers/seller.png" alt="" />
            </div>
            <div className="sell-fill-body">
              <Link to="/">
                User <FontAwesomeIcon icon={faEye} />
              </Link>
              <span className="follow">Follow</span>
              <span className="date">Member Since: 19.09.2022</span>
            </div>
          </div>
          <div className="sell-fill-group">
            <div className="sell-fill-header">
              <img src="./assets/images/sellers/seller.png" alt="" />
            </div>
            <div className="sell-fill-body">
              <Link to="/">
                User <FontAwesomeIcon icon={faEye} />
              </Link>
              <span className="follow">Follow</span>
              <span className="date">Member Since: 19.09.2022</span>
            </div>
          </div>
          <div className="sell-fill-group">
            <div className="sell-fill-header">
              <img src="./assets/images/sellers/seller.png" alt="" />
            </div>
            <div className="sell-fill-body">
              <Link to="/">
                User <FontAwesomeIcon icon={faEye} />
              </Link>
              <span className="follow">Follow</span>
              <span className="date">Member Since: 19.09.2022</span>
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

export default SellFilters