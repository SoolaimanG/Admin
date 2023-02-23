import { Link } from "react-router-dom";
import "./topnav.css";

function TopNav(props) {
  return (
    <div className="topNav__one">
      <Link className="blacko" to={"/Home"}>
        Click To Return To Home Page
      </Link>
    </div>
  );
}

export default TopNav;
