import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const FollowCustomer = () => {
  return (
    <div className="follow-row">
      <h2 className="follow-title">Follow List</h2>
      <div className="follow-sellers">
        <div className="sell-fill-group">
          <div className="sell-fill-header">
            <img src="./assets/images/sellers/seller.png" alt="" />
          </div>
          <div className="sell-fill-body">
            <Link to="/">
              User <FontAwesomeIcon icon={faEye} />
            </Link>
            <span className="unfollow">Unfollow</span>
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
            <span className="unfollow">Unfollow</span>
            <span className="date">Member Since: 19.09.2022</span>
          </div>
        </div>
        <div className="sell-fill-group">
          <div className="sell-fill-header">
            <img src="./assets/images/sellers/ja.jpg" alt="" />
          </div>
          <div className="sell-fill-body">
            <Link to="/">
              User <FontAwesomeIcon icon={faEye} />
            </Link>
            <span className="unfollow">Unfollow</span>
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
  );
}

export default FollowCustomer