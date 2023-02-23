import "./users.css";
import { useContext } from "react";
import { Apps } from "../../App";
import { Link } from "react-router-dom";

function Users() {
  const { usersss, setUsers } = useContext(Apps);
  return (
    <div className="user-field">
      <div className="container user-container">
        <div className="user-info">
          <h3>Active Users</h3>
          <div className="btncta">
            <Link className="backkkk" to={"/Home"}>
              Back
            </Link>
          </div>
          {usersss.map((user) => {
            return (
              <div className="user-lists">
                <div className="user-img">
                  <img src={user.imageUrl} alt="" />
                  <div className="user-name">
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                  </div>
                </div>
                <div className="ptagggg">
                  <h3>Age</h3>
                  <p>{user.age}</p>
                </div>
                <div className="ptagggg">
                  <h3>Phone</h3>
                  <p>{user.phone}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Users;
