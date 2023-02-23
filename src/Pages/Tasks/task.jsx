import "./task.css";
import { CiSearch } from "react-icons/ci";
import useDate from "../../Logics/useDate";
import { Apps } from "../../App";
import { useContext, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Nav from "../../Components/TaskTopBar/nav";

function Tasks() {
  const Date = useDate();
  //Receiving Data from context Api
  const { DateAct, setDateAct } = useContext(Apps);

  // Function For Completing Task
  const Completed = (id) => {
    setDateAct(
      DateAct.map((items) => {
        return items.ID === id ? { ...items, state: "complete" } : items;
      })
    );
  };

  // Function For Deleting Task
  const Delete = (id) => {
    setDateAct(
      DateAct.filter((item) => {
        const newItem = item.ID !== id;
        return newItem;
      })
    );
  };

  return (
    <div className="task__one">
      <div className="container task__two">
        <div className="task__fixed">
          <Nav />
        </div>
        <div className="task__eight task__six">
          <h3>All Task(s) ({DateAct.length})</h3>
        </div>
        <div className="add__nine">
          {DateAct?.length ? (
            DateAct?.map((item) => {
              return (
                <div key={item.ID} className="add__ten">
                  <h2>{item.title}</h2>
                  <div className="add__eleven">
                    <p>{item.description}</p>
                    <div className="add__twelve">
                      <FaCalendar />
                      <p>{item.dateee}</p>
                    </div>
                  </div>
                  <div className="add__thirteen">
                    <button
                      onClick={() => {
                        Completed(item.ID);
                      }}
                      className={
                        item.state === "UnCompleted"
                          ? "uncompleted"
                          : "completed"
                      }
                    >
                      {item.state}
                    </button>
                    <AiFillDelete
                      onClick={() => {
                        Delete(item.ID);
                      }}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="add__fourteen">
              <h2>You Don't have any task added</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tasks;
