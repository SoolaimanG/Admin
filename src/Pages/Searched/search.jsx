import "./search.css";
import Nav from "../../Components/TaskTopBar/nav";
import { Apps } from "../../App";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import useDate from "../../Logics/useDate";

function Search() {
  // Useparams
  const Params = useParams();
  //   Array From Context API
  const { DateAct, setDateAct } = useContext(Apps);
  //   Date Logic
  const Date = useDate();

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
    <div className="container">
      <Nav />
      <div className="search__one">
        {DateAct?.map((item) => {
          if (item.title == Params.id) {
            return (
              <div key={item.ID} className="searching add__ten">
                <h2>{item.title}</h2>
                <div className="add__eleven">
                  <p>{item.description}</p>
                  <div className="add__twelve">
                    <FaCalendar />
                    <p>{Date}</p>
                  </div>
                </div>
                <div className="add__thirteen">
                  <button
                    onClick={() => {
                      Completed(item.ID);
                    }}
                    className={
                      item.state === "UnCompleted" ? "uncompleted" : "completed"
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
          }
        })}
      </div>
    </div>
  );
}

export default Search;
