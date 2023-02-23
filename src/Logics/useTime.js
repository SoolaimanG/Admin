import { useEffect, useState } from "react";

const useTime = () => {
  const time = new Date();
  const hour = time.getHours();
  const [greet, setGreeting] = useState("");

  useEffect(() => {
    if (hour >= 0 && hour < 12) {
      setGreeting("Good Morning");
    } else if (hour >= 12 && hour < 19) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return greet;
};

export default useTime;
