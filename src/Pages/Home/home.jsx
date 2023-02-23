import { useEffect, useContext } from "react";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Apps } from "../../App";
import Dashboard from "../../Components/Dashboard/dashboard";
import Sidebar from "../../Components/SideBar/sidebar";
import "./home.css";

export const notify = (Name) => toast.success(Name);

function Home({ shownav, setShownav }) {
  // Receiving Context Api
  console.log(shownav);

  useEffect(() => {
    notify("Login Successfully!");
  }, []);

  return (
    <div>
      <Toaster />
      <div className="home__one">
        <div className="sidebar__hide">
          <Sidebar shownav={shownav} />
        </div>
        <Dashboard setShownav={setShownav} />
      </div>
    </div>
  );
}

export default React.memo(Home);
