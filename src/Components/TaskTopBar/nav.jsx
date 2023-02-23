import { CiSearch } from "react-icons/ci";
import useDate from "../../Logics/useDate";
import AddTask from "../../Components/AddTask/AddTask";
import { useNavigate, Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  const Date = useDate();
  const Navigate = useNavigate();
  const [input, setInput] = useState("");

  // Functionality for Searching
  const Search = (e) => {
    e.preventDefault();
    Navigate("/Tasks/" + input);
  };

  //   INLINE STYLING
  const styles = {
    display: "flex",
    alignItem: "center",
    gap: "10px",
    backgroundColor: "#eee",
    width: "fit-content",
    padding: "10px 15px",
    marginTop: "15px",
    borderRadius: "7px",
    textDecoration: "none",
    color: "#252525",
  };

  return (
    <div>
      <nav className="task__three">
        <form onSubmit={Search} action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Tasks"
            type="text"
          />
          <CiSearch />
        </form>
        <div className="task__four">
          <h3>{Date}</h3>
        </div>
        <AddTask />
      </nav>
      <div>
        <form onSubmit={Search} className="task__five" action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Tasks"
            type="text"
          />
          <CiSearch />
          <button style={{ display: "none" }} type="submit"></button>
        </form>
      </div>
      <Link to={"/Home"} style={styles}>
        <FaLongArrowAltLeft />
        <p>Back Home</p>
      </Link>
    </div>
  );
};

export default Nav;
