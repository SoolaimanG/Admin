import TopNav from "../../Components/TopNav/topnav";
import "./employeepage.css";
import { Apps } from "../../App";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import EmployeeSearch from "../../Components/EmployeeSearch/employeesearch";
import { useNavigate } from "react-router-dom";

const EmployeePage = () => {
  // useContext
  const { employees, setEmployees } = useContext(Apps);
  const Navigate = useNavigate();

  //   Opening Dropdown
  const ClickHandle = (id) => {
    setEmployees(
      employees.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            condition: !item.condition,
          };
        } else {
          return {
            ...item,
            condition: false,
          };
        }
      })
    );
  };

  //   Deleting Employee
  const deleteEmployee = (id) => {
    setEmployees(
      employees.filter((item) => {
        return item.id !== id;
      })
    );
  };
  //   Create new employee
  const createNew = () => {
    Navigate("/CreateNew");
  };

  return (
    <div>
      <div className="employeespage__one">
        <div className="container employeespage__two">
          <TopNav />
          <div className="topnav__three">
            <EmployeeSearch />
            <div className="employeeeee">
              <h2>Employees: ({employees.length})</h2>
              <button onClick={createNew}>Create New Employee</button>
            </div>
          </div>
          <div className="topnav__four">
            {employees?.map((items) => {
              return (
                <div key={items.id} className="topnav__five">
                  <div
                    onClick={() => {
                      ClickHandle(items.id);
                    }}
                    className="threedot"
                  >
                    <BsThreeDotsVertical />
                  </div>
                  <div
                    className={`employeeeeeee ${items.condition ? "" : "none"}`}
                  >
                    <Link className="linkss" to={"/Employee/" + items.id}>
                      View Profile
                    </Link>
                    <p
                      onClick={() => {
                        deleteEmployee(items.id);
                      }}
                    >
                      Delete
                    </p>
                  </div>
                  <div className="topnav__six">
                    <img src={items.profileImg} alt="" />
                  </div>
                  <div className="topnav__seven">
                    <h3>{items.fullname}</h3>
                    <p className="role">{items.role}</p>

                    <h4>{items.phone}</h4>
                    <p>{items.Email}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
