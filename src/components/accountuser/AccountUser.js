import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh, faEye, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const AccountUser = () => {
  return (
    <div className="account-row">
      <h2 className="account-title">My Account</h2>
      <div className="account-groups">
        <div className="account-group">
          <img src="./assets/images/sellers/ja.jpg" alt="" />
          <button className="account-image">Change Image</button>
          <div className="form-row account">
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" value="Khan Haque" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  value="khan@gmail.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  value="Uttara Dhaka-1230"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" value="+304092051" required />
              </div>
              <div className="form-btn">
                <button>
                  <FontAwesomeIcon icon={faRefresh} />
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="account-group">
          <h2 className="account-subtitle">My Products</h2>
          <div className="account-products">
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
                <div className="card-footer account">
                  <button>
                    <FontAwesomeIcon icon={faPencil} />
                    Edit
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faTrash} />
                    Delete
                  </button>
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
                <div className="card-footer account">
                  <button>
                    <FontAwesomeIcon icon={faPencil} />
                    Edit
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faTrash} />
                    Delete
                  </button>
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
                <div className="card-footer account">
                  <button>
                    <FontAwesomeIcon icon={faPencil} />
                    Edit
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faTrash} />
                    Delete
                  </button>
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
                <div className="card-footer account">
                  <button>
                    <FontAwesomeIcon icon={faPencil} />
                    Edit
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faTrash} />
                    Delete
                  </button>
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
                <div className="card-footer account">
                  <button>
                    <FontAwesomeIcon icon={faPencil} />
                    Edit
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faTrash} />
                    Delete
                  </button>
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
                <div className="card-footer account">
                  <button>
                    <FontAwesomeIcon icon={faPencil} />
                    Edit
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faTrash} />
                    Delete
                  </button>
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
          <h2 className="account-subtitle">My Orders</h2>
          <div className="account-orders">
            <h4>
              Order No: 4645656473
              <Link to="/">
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </h4>
            <h4>
              Order No: 4645656473
              <Link to="/">
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </h4>
            <h4>
              Order No: 4645656473
              <Link to="/">
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </h4>
            <h4>
              Order No: 4645656473
              <Link to="/">
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </h4>
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

export default AccountUser
