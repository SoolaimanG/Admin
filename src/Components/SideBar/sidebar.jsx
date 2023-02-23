import "./sidebar.css";
import Avatar from "../../Assets/AdminAvatar22.avif";
import { RxDashboard } from "react-icons/rx";
import { FaUserFriends, FaTasks, FaPhoneAlt } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { MdProductionQuantityLimits, MdWork } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Apps } from "../../App";
import { useContext } from "react";

function Sidebar() {
  // Receiving a value from Redux
  const menuShow = useSelector((state) => state.user.condition);
  const { displayName } = useContext(Apps);

  // Navigator For React Router
  const navigate = useNavigate();

  return (
    <div className={`${menuShow ? "menu__show" : "sidebar__one"}`}>
      <div className="sidebarAvatar">
        <div className="sidebar__two">
          <img src={Avatar} alt="" />
          <h2 className="sidebar__three">{displayName}</h2>
          <h3 className="sidebar__four">Admin</h3>
        </div>
        <div className="sidebar__five">
          <Link to={"/Home"} className="sidebar__six">
            <RxDashboard />
            <p className="sidebar__seven">Dashboard</p>
          </Link>
          <Link to={"/Tasks"} className="sidebar__six">
            <FaTasks />
            <p className="sidebar__seven">Tasks</p>
          </Link>
          <Link to={"/Employee"} className="sidebar__six">
            <MdWork />
            <p className="sidebar__seven">Employers</p>
          </Link>
          <Link to={"/Products"} className="sidebar__six">
            <MdProductionQuantityLimits />
            <p className="sidebar__seven">Products</p>
          </Link>
          <Link to={"/Users"} className="sidebar__six">
            <FaUserFriends />
            <p className="sidebar__seven">Users</p>
          </Link>
          <Link to={"/App"} className="sidebar__six">
            <SiSimpleanalytics />
            <p className="sidebar__seven">App</p>
          </Link>
          <Link to={"/Admin"} className="sidebar__six">
            <FaPhoneAlt />
            <p className="sidebar__seven">Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
