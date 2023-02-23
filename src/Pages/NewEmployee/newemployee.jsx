import "./newemployee.css";
import { FaFileExport } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import { Apps } from "../../App";
import Employee1 from "../../Assets/AdminAvatar1.avif";
import Employee2 from "../../Assets/AdminAvatar2.avif";
import Employee3 from "../../Assets/AdminAvatar3.avif";
import Employee4 from "../../Assets/AdminAvatar4.avif";
import Employee5 from "../../Assets/AdminAvatar5.avif";
import Employee6 from "../../Assets/AdminAvatar6.avif";
import Employee7 from "../../Assets/AdminAvatar7.avif";
import Employee8 from "../../Assets/AdminAvatar8.avif";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ButtonBack from "../../Components/ButtonBack/buttonback";

export const notify = (message) => {
  toast.success(message);
};
function NewEmployee() {
  // Images
  const ImageArray = [
    Employee1,
    Employee2,
    Employee3,
    Employee4,
    Employee5,
    Employee6,
    Employee7,
    Employee8,
  ];
  // Context Api
  const { employees, setEmployees } = useContext(Apps);

  // USeStates
  const [fullname, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [Email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [Salary, setSalary] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [rating, setRating] = useState("");
  const [Education, setEducation] = useState("");
  const [profileImg, setProfileImg] = useState(null);
  const [condition, setCondition] = useState(false);

  // UseNavigate
  const Navigate = useNavigate();

  //   Create New User
  const CreateNew = (e) => {
    e.preventDefault();
    if (
      (age,
      fullname,
      Email,
      Salary,
      employeeID,
      address,
      phone,
      country,
      rating,
      Education == "")
    ) {
      alert("Field Must Not Be Empty");
    } else {
      const random = Math.floor(Math.random() * ImageArray.length) + 1;
      const newEmployee = {
        id: Date.now(),
        fullname,
        role,
        Email,
        age,
        linkedin: "http://www.linkedin.com/in/soolainang",
        instagram: "https://www.instagram.com/_____soolaiman.g/",
        github: "https://github.com/SoolaimanG",
        Salary,
        employeeID,
        address,
        phone,
        country,
        rating,
        Education,
        profileImg: ImageArray[random],
      };
      setEmployees((prev) => [...prev, newEmployee]);
      notify("Successfully Created");
      setCondition(true);
    }
  };

  //   USEEEFECT
  useEffect(() => {
    if (condition) {
      notify();
    }

    return () => {
      setCondition(false);
    };
  });

  const HandleFileChange = () => {
    alert(
      `Unfortunately you can't set this dynamically due to security reasons`
    );
  };

  return (
    <div className="container">
      <Toaster />
      <h1>New Employee</h1>
      <ButtonBack />
      <form className="newCreate" action="">
        <div className="firstone">
          <div className="form-group">
            <label>FullName</label>
            <input
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Rick Sanchez"
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Web Designer"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="form-control"
              placeholder="morty@gmail.com"
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="text"
              className="form-control"
              placeholder="20"
            />
          </div>
          <div className="form-group">
            <label>Salary</label>
            <input
              value={Salary}
              onChange={(e) => setSalary(e.target.value)}
              type="text"
              className="form-control"
              placeholder="$1,000"
            />
          </div>
          <div className="form-group">
            <label>employeeID</label>
            <input
              value={employeeID}
              onChange={(e) => setEmployeeID(e.target.value)}
              type="text"
              className="form-control"
              placeholder="#200"
            />
          </div>
        </div>
        <div className="firstone">
          <div className="form-group">
            <label>Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="form-control"
              placeholder="1254 Luke Street"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              className="form-control"
              placeholder="234-(6728)-737"
            />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              type="text"
              className="form-control"
              placeholder="London"
            />
          </div>
          <div className="form-group">
            <label>Rating</label>
            <input
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              type="number"
              className="form-control"
              placeholder="4"
            />
          </div>
          <div className="form-group">
            <label>Education</label>
            <input
              value={Education}
              onChange={(e) => setEducation(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Degree"
            />
          </div>
          <div className="employee-input form-group">
            <label htmlFor="file" className="custom-file-upload">
              <FaFileExport />
              Choose File
              <input
                onChange={HandleFileChange}
                className="file"
                id="file"
                type="file"
              />
            </label>
          </div>
          <div className="employee-btn form-group">
            <button onClick={CreateNew}>Create New Employee</button>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
}

export default NewEmployee;
