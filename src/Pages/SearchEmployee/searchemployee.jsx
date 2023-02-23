import EmployeeSearch from "../../Components/EmployeeSearch/employeesearch";
import TopNav from "../../Components/TopNav/topnav";
import { useParams, Link } from "react-router-dom";
import { Apps } from "../../App";
import { useContext, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import "./searchemployee.css";
import ButtonBack from "../../Components/ButtonBack/buttonback";

function SearchEmployee() {
  // Recieve Context Api
  const { employees, setEmployees } = useContext(Apps);
  const params = useParams();
  const [name, setName] = useState("");

  useEffect(() => {
    employees.map((employee) => {
      if (employee.fullname === params.query) {
        console.log(employee.fullname);
        return setName(employee.fullname);
      }
    });
  }, [params]);

  console.log(params.query);
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
      <div className="dropdown">
        <EmployeeSearch />
        <ButtonBack />
      </div>

      <div className="oneperson">
        {employees?.map((items) => {
          if (items.fullname === params.query) {
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
      <div className={`error1 ${name !== params.query ? "" : "none"}`}>
        <h2>This Username does not seems exist.</h2>
      </div>
    </div>
  );
}

export default SearchEmployee;
