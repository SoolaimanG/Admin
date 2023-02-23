import "./adminsetting.css";
import AdminNav from "../../Components/AdminNav/adminnav";
import Toggle from "../../Components/toggle";

function AdminSetting() {
  return (
    <div>
      <div className="container admin-container">
        <AdminNav />
        <div className="admin-settings admin-div-sub">
          <div className="admin-div-basic-one">
            <h3>Advance Settings</h3>
            <div className="my-admin-basic">
              <div className="my-admin-basic-sub">
                <h3>Secure Browsing</h3>
                <p>Browsing Securely ( https ) when it's necessary</p>
              </div>
              <Toggle />
            </div>
            <div className="my-admin-basic">
              <div className="my-admin-basic-sub">
                <h3>Login Notifications</h3>
                <p>Notify when login attempted from other place</p>
              </div>
              <Toggle />
            </div>
            <div className="my-admin-basic">
              <div className="my-admin-basic-sub">
                <h3>Login Approvals</h3>
                <p>
                  Approvals is not required when login from unrecognized
                  devices.
                </p>
              </div>
              <Toggle />
            </div>
          </div>
          <div className="admin-div-basic-one">
            <h3>Advance Settings</h3>
            <div className="my-admin-basic">
              <div className="my-admin-basic-sub">
                <h3>Secure Browsing</h3>
                <p>Browsing Securely ( https ) when it's necessary</p>
              </div>
              <Toggle />
            </div>
            <div className="my-admin-basic">
              <div className="my-admin-basic-sub">
                <h3>Login Notifications</h3>
                <p>Notify when login attempted from other place</p>
              </div>
              <Toggle />
            </div>
            <div className="my-admin-basic">
              <div className="my-admin-basic-sub">
                <h3>Login Approvals</h3>
                <p>
                  Approvals is not required when login from unrecognized
                  devices.
                </p>
              </div>
              <Toggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSetting;
