import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./createuser.css";
import { useState, useContext } from "react";
import { Apps } from "../../App";
import { useParams } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1.5px solid #dddd",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
};

export default function EditUser() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //   Params
  const params = useParams();
  console.log(params.name);

  //   Context
  const { employees, setEmployees } = useContext(Apps);

  //   USESTATE
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [Salary, setSalary] = useState("");
  const [role, setRole] = useState("");

  const EditUser = () => {
    if (
      name === "" &&
      phone === "" &&
      location === "" &&
      email === "" &&
      Salary === "" &&
      role === ""
    ) {
      console.log("Error");
    } else {
      setEmployees(
        employees.map((item) => {
          if (item.id === Number(params.name)) {
            return {
              ...item,
              fullname: name,
              phone: phone,
              country: location,
              Email: email,
              Salary: Salary,
              role: role,
            };
          } else {
            return item;
          }
        })
      );
    }
  };

  return (
    <div>
      <button onClick={handleOpen}>Edit</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit User
          </Typography>
          <div className="edituser">
            <div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Full Name</label>
                <input
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  placeholder="Rick Morty"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Phone</label>
                <input
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                  placeholder="(152)-767-278"
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Location</label>
                <input
                  value={location}
                  onChange={(event) => {
                    setLocation(event.target.value);
                  }}
                  placeholder="London"
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">E-Mail</label>
                <input
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  placeholder="Jerry@gmail.com"
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Salary</label>
                <input
                  value={Salary}
                  onChange={(event) => {
                    setSalary(event.target.value);
                  }}
                  type="text"
                  placeholder="$1,700"
                  className="form-control"
                  id="exampleInputPassword1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Role</label>
                <input
                  value={role}
                  onChange={(event) => {
                    setRole(event.target.value);
                  }}
                  placeholder="Marketing"
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <button
                  onClick={() => {
                    EditUser();
                    handleClose();
                  }}
                  className="form__btn"
                  type="submit"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
