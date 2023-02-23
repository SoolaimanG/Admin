import "./adminbasic.css";
import AdminNav from "../../Components/AdminNav/adminnav";
import Toggle from "../../Components/toggle";

function AdminBasic() {
  return (
    <div>
      <div className="container admin-container">
        <AdminNav />
        <div className="admin-basic">
          <div className="admin-div-basic-one">
            <h3>General Settings</h3>
            <div className="admin-settings-sub">
              <form action="" className="admin-basic-form">
                <label className="admin-basic-label" htmlFor="">
                  Username
                  <input type="text" />
                </label>
                <label className="admin-basic-label" htmlFor="">
                  Account Email
                  <input type="text" />
                </label>
                <label className="admin-basic-label" htmlFor="">
                  Language
                  <input type="text" />
                </label>
                <label className="admin-basic-label" htmlFor="">
                  Signing Using
                  <input type="text" />
                </label>
              </form>
            </div>
          </div>
          <div className="admin-div-basic-two">
            <div className="admin-div-sub">
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
            <div className="admin-div-sub"></div>
          </div>
          <div className="admin-div-two"></div>
        </div>
      </div>
    </div>
  );
}

export default AdminBasic;
