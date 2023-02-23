import "./notify.css";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";

function Notify() {
  const [Notification, setNotification] = useState([
    {
      id: 1,
      time: "Feb 23",
      message: "If you like this please tell your friends and share!.",
      icon: <AiOutlineMail />,
    },
    {
      id: 2,
      time: "Feb 10",
      message: `I Love You 💓`,
      icon: <AiOutlineMail />,
    },
    {
      id: 3,
      time: "Feb 1",
      message: "Follow My Socials.",
      icon: <AiOutlineMail />,
    },
  ]);

  // Deleting Notifiations
  const handleDelete = (id) => {
    setNotification(Notification.filter((item) => item.id !== id));
  };

  return (
    <div className="notify__one">
      <h4>
        {Notification.length <= 0
          ? null
          : `You Have ${Notification.length} New Messages`}
      </h4>
      {Notification.map((notify) => {
        return (
          <div key={notify.id} className="notify__two">
            <div className="notify__six">
              <div className="notify__icon">{notify.icon}</div>
              <div className="notify__three">
                <p className="date">{notify.time}</p>
                <p className="message">{notify.message}</p>
              </div>
            </div>
            <p onClick={() => handleDelete(notify.id)} className="delete">
              Delete
            </p>
          </div>
        );
      })}

      <div>{Notification.length <= 0 ? "You Have No New Messages" : ""}</div>
    </div>
  );
}

export default Notify;
