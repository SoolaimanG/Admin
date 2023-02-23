import "./admin.css";
import AdminNav from "../../Components/AdminNav/adminnav";
import ProfilePic from "../../Assets/AdminAvatar22.avif";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { Apps } from "../../App";
import { useContext } from "react";

function Admin() {
  // Recieving From Context Api
  const { displayName } = useContext(Apps);

  return (
    <>
      <div className="admin-page">
        <div className="container admin-container">
          <AdminNav />
          <div className="admin-container2">
            <div className="admin-div-one">
              <div className="sub-divs">
                <div className="img-show">
                  <img src={ProfilePic} alt="image" />
                  <h3>{displayName}</h3>
                  <p>Web Developer.</p>
                </div>
                <div className="projectsssss">
                  <div className="projectss-subs">
                    <h3>Projects</h3>
                    <p>20</p>
                  </div>
                  <div className="projectss-subs">
                    <h3>Members</h3>
                    <p>8.7k</p>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-info-each">
                    <AiOutlineMail />
                    <p>Suleimaangee@gmail.com</p>
                  </div>
                  <div className="project-info-each">
                    <AiOutlinePhone />
                    <p>08088362315</p>
                  </div>
                  <div className="project-info-each">
                    <BiCurrentLocation />
                    <p>Niger State</p>
                  </div>
                </div>
              </div>
              <div className="sub-divs">
                <div className="sub-div-skills">
                  <h3>Skills</h3>
                  <div className="progress">
                    <div className="progress-contain">
                      <p>HTML</p>
                      <progress value="80" max="100"></progress>
                    </div>
                    <div className="progress-contain">
                      <p>CSS</p>
                      <progress value="65" max="100"></progress>
                    </div>
                    <div className="progress-contain">
                      <p>JAVASCRIPT</p>
                      <progress value="59" max="100"></progress>
                    </div>
                    <div className="progress-contain">
                      <p>REACT</p>
                      <progress value="72" max="100"></progress>
                    </div>
                    <div className="progress-contain">
                      <p>BOOTSTRAP</p>
                      <progress value="50" max="100"></progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="admin-div-two">
              <div className="div-two-sub-divs">
                <div className="div-of-h3">
                  <h3>About Me</h3>
                </div>
                <div className="about-me">
                  <p>
                    Hello, I’m Anshan Handgun Creative Graphic Designer & User
                    Experience Designer based in Website, I create digital
                    Products a more Beautiful and usable place. Morbid accusant
                    ipsum. Nam nec tellus at.
                  </p>
                </div>
              </div>
              <div className="div-two-sub-divs">
                <div className="div-of-h3">
                  <h3>Personal Details</h3>
                </div>
                <div className="about-me2">
                  <div className="full-name">
                    <div className="full-name-1">
                      <h3>Full Name</h3>
                      <p>Soolaiman G Abubakar</p>
                    </div>
                    <div className="full-name-1">
                      <h3>Father Name</h3>
                      <p>Mohammed G Abubakar</p>
                    </div>
                  </div>
                  <div className="full-name">
                    <div className="full-name-1">
                      <h3>Phone</h3>
                      <p>+234-8088-362-315</p>
                    </div>
                    <div className="full-name-1">
                      <h3>Country</h3>
                      <p>Nigeria</p>
                    </div>
                  </div>
                  <div className="full-name">
                    <div className="full-name-1">
                      <h3>Email</h3>
                      <p>Suleimaangee@gmail.com</p>
                    </div>
                    <div className="full-name-1">
                      <h3>Zip</h3>
                      <p>092091</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-two-sub-divs">
                <div className="div-of-h3">
                  <h3>Education</h3>
                </div>
                <div className="about-me2">
                  <div className="full-name">
                    <div className="full-name-1">
                      <h3>High School</h3>
                      <p>2015-2019</p>
                    </div>
                    <div className="full-name-1">
                      <h3>Insitute</h3>
                      <p>Polythecnic Staff School</p>
                    </div>
                  </div>
                  <div className="full-name">
                    <div className="full-name-1">
                      <h3>Bachelor (Year)</h3>
                      <p>Ongoing</p>
                    </div>
                    <div className="full-name-1">
                      <h3>Insitute</h3>
                      <p>F.U.T</p>
                    </div>
                  </div>
                  <div className="full-name">
                    <div className="full-name-1">
                      <h3>School (Year)</h3>
                      <p>2009-2011</p>
                    </div>
                    <div className="full-name-1">
                      <h3>Institute</h3>
                      <p>NAN</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-two-sub-divs">
                <div className="div-of-h3">
                  <h3>Emplyment</h3>
                </div>
                <div className="about-me">
                  <p>Unemploy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
