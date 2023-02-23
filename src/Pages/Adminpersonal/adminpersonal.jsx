import "./adminpersonal.css";
import AdminNav from "../../Components/AdminNav/adminnav";
import ProfilePic from "../../Assets/AdminAvatar22.avif";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { useState, useContext } from "react";
import { Apps } from "../../App";

function AdminPersonal() {
  const [name, setName] = useState("");
  // Context Api
  const { setDisplayName } = useContext(Apps);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Provide Name First");
    } else {
      setDisplayName(name);
    }
  };
  return (
    <div>
      <div className="container admin-container">
        <AdminNav />
        <div className="admin-container-wrapper">
          <div className="admin-personal-one">
            <h3>Personal Information.</h3>
            <div className="personal-info">
              <img src={ProfilePic} alt="" />
              <form action="" className="pesonal-info">
                <label htmlFor="">
                  First Name
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                  />
                </label>
                <label htmlFor="">
                  Last Name
                  <input type="text" />
                </label>
                <label htmlFor="">
                  Country
                  <input type="text" />
                </label>
                <label htmlFor="">
                  Zip Code
                  <input type="text" />
                </label>
              </form>
              <label className="pesonal-info-label" htmlFor="">
                Bio
                <textarea name="" id=""></textarea>
              </label>
            </div>
          </div>
          <div className="personalSecond">
            <div className="admin-personal-two">
              <h3>Social Network.</h3>
              <div className="social-accout">
                <div className="one-social">
                  <AiFillInstagram />
                  <a href=""> Facebook</a>
                </div>
                <div className="one-social">
                  <AiFillLinkedin />
                  <a href="">LinkedIn</a>
                </div>
                <div className="one-social">
                  <AiFillTwitterSquare />
                  <a href="">Twitter</a>
                </div>
              </div>
            </div>
            <div className="admin-personal-two">
              <h3>Contact Information.</h3>
              <div className="contact-information">
                <form action="">
                  <label className="contact-infoo-label" htmlFor="">
                    Phone Number
                    <div className="phoneNumber">
                      <select name="" id="">
                        <option value="">+91</option>
                        <option value="">+1-642</option>
                        <option value="">+36</option>
                        <option value="">(255)</option>
                        <option value="">+39</option>
                        <option value="">+1-876</option>
                        <option value="">+7</option>
                        <option value="">(254)</option>
                        <option value="">(737)</option>
                        <option value="">+234</option>
                        <option value="">+95</option>
                      </select>
                      <input type="text" />
                    </div>
                  </label>
                  <label htmlFor="">
                    E-mail
                    <input type="email" />
                  </label>
                </form>
                <label className="portfolio-link" htmlFor="">
                  Portfolio Link
                  <input type="text" />
                </label>
                <label className="portfolio-link" htmlFor="">
                  Address
                  <input type="text" />
                </label>
              </div>
            </div>
            <button className="logout">Logout</button>
            <button onClick={handleUpdate}>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPersonal;
