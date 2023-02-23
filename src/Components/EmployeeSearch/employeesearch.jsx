import "./employeesearch.css";
import { CgSearch } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function EmployeeSearch() {
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("");

  //   UseNavigate to navigate
  const navigate = useNavigate();

  //   functionality to serach
  const search = (e) => {
    e.preventDefault();
    navigate("/Search/" + value);
  };

  return (
    <div className="employeesearch__zero">
      <div className="employeesearch">
        <form onSubmit={search} className="employeesearch__one" action="">
          <div className="employeesearch__three">
            <input
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
              }}
              placeholder="Search by Name"
              type="text"
            />
            <CgSearch />
          </div>

          <select
            onChange={(e) => {
              navigate("/Filter/" + e.target.value);
              setFilter(e.target.value);
            }}
            name=""
            id=""
          >
            <option value="Web Designer">Web Designer</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Product Manager">Product Manager</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default EmployeeSearch;
