import React from "react";
import EmployeeSearch from "../../Components/EmployeeSearch/employeesearch";
import TopNav from "../../Components/TopNav/topnav";
import { Apps } from "../../App";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import ButtonBack from "../../Components/ButtonBack/buttonback";

function FilterList() {
  const { employees, setEmployees } = useContext(Apps);

  const params = useParams();
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
  return (
    <div className="container">
      <TopNav />
      <div className="topnav__three">
        <EmployeeSearch />
      </div>
      <ButtonBack />
      <div className="oneperson">
        {employees?.map((items) => {
          if (items.role === params.id) {
            return (
              <div key={items.id} className="searchdoen topnav__five">
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
          }
        })}
      </div>
    </div>
  );
}

export default FilterList;
