import "./adminpassword.css";
import AdminNav from "../../Components/AdminNav/adminnav";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [conditionalPassword, setConditionalPassword] = useState(false);

  // UseNavigate
  const Navigate = useNavigate();

  // Checking if password match
  useEffect(() => {
    if (newPassword.length >= 8 && confirmPassword.length >= 8) {
      if (newPassword === confirmPassword) {
        setConditionalPassword(true);
      } else {
        setConditionalPassword(false);
      }
    } else {
      setConditionalPassword(false);
    }

    console.log(conditionalPassword);
    return () => {
      console.log("Confirm");
    };
  }, [newPassword, confirmPassword]);

  return (
    <div>
      <div className="container admin-container">
        <AdminNav />
        <div className="password-admin admin-div-basic-one">
          <h3>Change Password</h3>
          <div className="password-flex admin-settings-sub">
            <div className="password-container-one">
              <label htmlFor="">
                Old Password
                <input type="text" />
              </label>
              <label htmlFor="">
                New Password
                <input
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                  type="text"
                />
              </label>
              <label htmlFor="">
                Confirm Password
                <input
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  type="text"
                />
                <span>Make sure the password is meeting the requirements</span>
              </label>
            </div>
            <div className="password-container-one">
              <h3>New Password must contain:</h3>
              <div className="must">
                <div className="must-input">
                  <p>--</p>
                  <p>At least 8 characters</p>
                </div>
                <div className="must-input">
                  <p>--</p>
                  <p>At least 1 lower letter (a-z)</p>
                </div>
                <div className="must-input">
                  <p>--</p>
                  <p>At least 1 uppercase letter (A-Z)</p>
                </div>
                <div className="must-input">
                  <p>--</p>
                  <p>At least 1 number (0-9)</p>
                </div>
                <div className="must-input">
                  <p>--</p>
                  <p>At least 1 special characters</p>
                </div>
              </div>
            </div>
          </div>
          <div className={conditionalPassword ? "password-btn" : "can-update"}>
            <button
              onClick={() => {
                Navigate("/Home");
              }}
            >
              Back Home
            </button>
            <button>Update Password</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPassword;
