import "./adminnav.css";
import { AiOutlineUser, AiFillSetting } from "react-icons/ai";
import { BiNotepad, BiLockAlt } from "react-icons/bi";
import { TbNotes } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function AdminNav() {
  return (
    <div className="adminnav-container">
      <div className="adminnav-list">
        <NavLink to={"/Admin/Profile"} className="eachlist">
          <AiOutlineUser />
          <p>Profile</p>
        </NavLink>
        <NavLink to={"/Admin/Personal"} className="eachlist">
          <BiNotepad />
          <p>Personal</p>
        </NavLink>
        <NavLink to={"/Admin/Account"} className="eachlist">
          <TbNotes />
          <p>My Account</p>
        </NavLink>
        <NavLink to={"/Admin/Password"} className="eachlist">
          <BiLockAlt />
          <p>Change Password</p>
        </NavLink>
        <NavLink to={"/Admin/Settings"} className="eachlist">
          <AiFillSetting />
          <p>Settings</p>
        </NavLink>
      </div>
    </div>
  );
}

export default AdminNav;
