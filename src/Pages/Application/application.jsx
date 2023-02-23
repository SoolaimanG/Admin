import "./application.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Application() {
  const Time = new Date();
  const [seconds, setSeconds] = useState("");
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");
  const [day, setDay] = useState("");
  const [countdown, setCountdown] = useState(
    JSON.parse(localStorage.getItem("countdown")) || 2592000
  ); // 30 days in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    setDay(Math.floor(countdown / 86400));
    setHours(Math.floor((countdown % 86400) / 3600));
    setMinutes(Math.floor((countdown % 3600) / 60));
    setSeconds(countdown % 60);

    localStorage.setItem("countdown", JSON.stringify(countdown));

    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div className="App-container">
      <h2>Coming Soon.....</h2>
      <div className="countdown">
        <h3>{day}</h3>
        <h3>{hours}</h3>
        <h3>{minutes}</h3>
        <h3>{seconds}</h3>
      </div>
      <Link to={"/Home"}>Back Home</Link>
    </div>
  );
}

export default Application;
