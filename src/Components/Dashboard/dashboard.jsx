import React, { useState, useContext } from "react";
import "./dashboard.css";
import useTime from "../../Logics/useTime";
import { MdNotifications, MdMenu } from "react-icons/md";
import BasicModal from "../Modal/modal";
import { useSelector, useDispatch } from "react-redux";
import { setCondition } from "../../Redux/userSlice";
import { AiOutlineClose } from "react-icons/ai";
import Notify from "../Notify/notify";
import Sales from "../Sales/sales";
import Charts from "../Charts/charts";
import Table from "../Tables/table";
import Balance from "../Balance/balance";
import { Apps } from "../../App";

function Dashboard() {
  // Receiving a value from context Api
  const menuShow = useSelector((state) => state.user.condition);
  const { displayName } = useContext(Apps);
  // Sending Props
  const Sales1 = "$1,200";
  const Customers = 20;
  const Income = "$200";
  const Referrals = "9";

  // USESTATE
  const [fal, setFal] = useState(true);
  const [condition1, setCondition1] = useState(false);
  const [condition2, setCondition2] = useState(true);
  const time = useTime();

  // Usedispatch
  const dispatch = useDispatch();

  // HandleMenu Showing
  const handleMenu = () => {
    setFal((prev) => !prev);
    dispatch(setCondition({ fal }));
  };

  // Handle Showing Notifications
  const handleShowingNotifications = () => {
    setCondition1((prev) => !prev);
  };

  return (
    <div className="dashboard__one">
      <div className="dashboard__two">
        <nav className="dashboard__three">
          <p>{time + " " + displayName} &#x1F44B;,</p>
          <div className="dashboard__four">
            <div style={{ cursor: "pointer" }}>
              <BasicModal />
            </div>
            <div
              className={`notification ${condition2 ? "notify__jiggle" : ""}`}
            >
              <div className="after"></div>
              <div
                onClick={() => {
                  handleShowingNotifications();
                  setCondition2(false);
                }}
              >
                <MdNotifications />
              </div>
              <div className={condition1 ? "down" : "hide__notification"}>
                <Notify />
              </div>
            </div>
            <div className="menu__hidden" onClick={handleMenu}>
              {menuShow ? <AiOutlineClose /> : <MdMenu />}
            </div>
          </div>
        </nav>
      </div>
      <div className="dashboard__five">
        <Sales />
        <Balance />
        <div className="charts">
          <Charts />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
