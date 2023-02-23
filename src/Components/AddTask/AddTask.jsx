import * as React from "react";
import "./addtask.css";
import Modal from "@mui/material/Modal";
import { AiOutlineClose } from "react-icons/ai";
import { Apps } from "../../App";
import { useState, useContext } from "react";
import useDate from "../../Logics/useDate";

export default function AddTask() {
  const dateee = useDate();

  // Receiving Value From Context Api
  const { DataAct, setDateAct } = useContext(Apps);

  // Date As ID
  const ID = Date.now();

  // UseStates
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setcondition] = useState(false);

  // Open Modal
  const handleOpen = () => setOpen(true);
  // CLose Modal
  const handleClose = () => setOpen(false);

  // Functionality For Adding Tasks
  const AddTask = (e) => {
    e.preventDefault();
    if (description == "" || title == "") {
      alert("Description and title are required");
    } else {
      const newTask = { ID, title, description, state: "UnCompleted", dateee };
      setDateAct((prev) => [...prev, newTask]);
      setcondition((prev) => !prev);
    }
  };

  return (
    <div>
      <div onClick={handleOpen}>
        <button className="task__six">Add New Task</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="add__one">
          <div className="add__two">
            <div className="add__three">
              <h3>Add a task</h3>
              <AiOutlineClose
                style={{ cursor: "pointer", fontSize: "1.4rem" }}
                onClick={handleClose}
              />
            </div>
            <div className="add__four">
              <form>
                <label htmlFor="title">
                  title
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Make Payments"
                    name="title"
                    className="add__five"
                    type="text"
                  />
                </label>
                <label htmlFor="task">
                  Description
                  <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Your Task Note"
                    name="task"
                    className="add__six"
                    cols="20"
                    rows="17"
                    type="text"
                  />
                </label>
                <button onClick={AddTask} className="add__seven">
                  Add Task
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
