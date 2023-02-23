import "./profile.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Apps } from "../../App";
import { BsThreeDots, BsPhone, BsLinkedin, BsGithub } from "react-icons/bs";
import {
  MdOutlineMail,
  MdOutlineLocationOn,
  MdAccessTime,
} from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import EditUser from "../../Components/CreateUser/createuser";
import ButtonBack from "../../Components/ButtonBack/buttonback";

function Profile() {
  // useContext
  const { employees, setEmployees } = useContext(Apps);
  const [time, setTime] = useState(0);

  const type = useParams();
  console.log(type);

  useEffect(() => {
    const random = Math.floor(Math.random() * 5) + 1;
    setTime(random);
  }, [type]);
  return (
    <div>
      <div className="container profile__one">
        {employees.map((items) => {
          if (items.id === Number(type.name)) {
            return (
              <div className="profile__one" key={items.id}>
                <div className="profile__two">
                  <div className="profile__zero">
                    <div className="profile__three">
                      <img src={items.profileImg} alt="" />
                    </div>
                    <div className="profile__four">
                      <h3>{items.fullname}</h3>
                      <p>{items.role}</p>
                      <p>{items.employeeID}</p>
                    </div>
                  </div>
                  <div className="profile__five">
                    <ButtonBack />
                  </div>
                </div>
                <div className="profile__six">
                  <div className="profile__seven">
                    <div className="profile__eight">
                      <BsPhone />
                      <p>{items.phone}</p>
                    </div>
                    <div className="profile__eight">
                      <MdOutlineLocationOn />
                      <p>{items.country}</p>
                    </div>
                  </div>
                  <div className="profile__seven">
                    <div className="profile__eight">
                      <MdOutlineMail />
                      <p>{items.Email}</p>
                    </div>
                    <div className="profile__eight">
                      <MdAccessTime />
                      <p>Last seen {time} days ago</p>
                    </div>
                  </div>
                </div>
                <div className="profile__nine">
                  <div className="profile__ten">
                    <h3>General Information</h3>
                    <EditUser />
                  </div>
                  <div className="profile__thirteen">
                    <div className="profile__twelve">
                      <div className="profile__eleven">
                        <h4>Age</h4>
                        <p>{items.Age}</p>
                      </div>
                    </div>
                    <div className="profile__twelve">
                      <div className="profile__eleven">
                        <h4>Education</h4>
                        <p>{items.Education}</p>
                      </div>
                    </div>
                    <div className="profile__twelve">
                      <div className="profile__eleven">
                        <h4>Salary</h4>
                        <p>{items.Salary}</p>
                      </div>
                    </div>
                    <div className="profile__twelve">
                      <div className="profile__eleven">
                        <h4>Rating</h4>
                        <p>{items.rating} of 5</p>
                      </div>
                    </div>
                    <div className="profile__twelve">
                      <div className="profile__eleven">
                        <h4>Address</h4>
                        <p>{items.address}</p>
                      </div>
                    </div>
                    <div className="profile__twelve">
                      <div className="profile__eleven">
                        <a
                          target={"blank"}
                          href="http://www.linkedin.com/in/soolainang"
                        >
                          {" "}
                          <BsLinkedin />{" "}
                        </a>
                        <a href="https://www.instagram.com/_____soolaiman.g/">
                          {" "}
                          <FiInstagram />{" "}
                        </a>
                        <a href="https://github.com/SoolaimanG">
                          {" "}
                          <BsGithub />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Profile;
