import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRefresh,
  faEye,
  faPencil,
  faTrash,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Passwords from '../forms/Passwords';

const AccountUser = () => {

  const navigate = useNavigate();

  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

   const [name, setName] = useState(userInfo.name);
   const [email, setEmail] = useState(userInfo.email);
   const [address, setAddress] = useState(userInfo.address);
  const [phone, setPhone] = useState(userInfo.phone);
  
  const [image, setImage] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [previewImage, setPreviewImage] = useState(false);


  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      localStorage.getItem("userInfo");
      navigate("/");
    }
  });

  const handlerUpdate = async(e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put("/api/users/update", {
        _id : userInfo._id,
        name,
        email,
        address,
        phone,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      toast.success("Your account successfully updated!");
    } catch (error) {
      toast.error("Account not updated!");
    }
  }

  const validateImage = async(e) => {
    e.preventDefault();

    const file = e.target.files[0];
    if (file.size >= 1048574) {
      return toast.error("Max Size for Image is 1mb!");
    }
    else {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }

  }

  const UploadImage = async(image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "nwrovis3");

    try {

      setUploadingImage(true);
      let res = await fetch("https://api.cloudinary.com/v1_1/dmiu18lya/image/upload", {
        method: 'post',
        body: data
      });

      const urlData = await res.json();
      setUploadingImage(false);
      return urlData.url;

    } catch (error) {
      setUploadingImage(false);
      toast.error("Image not uploaded!");
    }
  }

  const handlerUpdateImage = async (e) => {
    e.preventDefault();

    if (!image) {
      return toast.error("Please select your profile image!");
    }
      
    const url = await UploadImage(image);
    console.log(url);


    try {
      const { data } = await axios.put("/api/users/update", {
        _id: userInfo._id,
        image: url
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      toast.success("Profile Image successfully updated!");
    } catch (error) {
      toast.error("Account not updated!");
    }

  }

  return (
    <div className="account-row">
      <h2 className="account-title">My Account</h2>
      <div className="account-groups">
        <div className="account-group">
          <form className="form-image" onSubmit={handlerUpdateImage}>
            <img
              src={previewImage || "./assets/images/sellers/seller.png"}
              alt=""
            />
              <label htmlFor="image_upload"><FontAwesomeIcon icon={faPlusCircle} /></label>
            <input
              type="file"
              hidden
              id="image_upload"
              accept="image/png, image/jpg, image/jpeg"
              onChange={validateImage}
            />
            <button className="btn-upload">{uploadingImage ? "Uploading..." : "Upload"}</button>
          </form>

          <div className="form-row account">
            <form onSubmit={handlerUpdate}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  required
                />
              </div>
              <div className="form-group">
                <span className="change-password" onClick={() => setOpen(true)}>
                  Change Password
                </span>
              </div>
              <div className="form-btn">
                <button>
                  <FontAwesomeIcon icon={faRefresh} />
                  Update
                </button>
              </div>
            </form>
          </div>
          {open && <Passwords setOpen={setOpen} />}
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
