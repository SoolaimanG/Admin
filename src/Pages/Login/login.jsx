import "./login.css";
import { FcGoogle } from "react-icons/fc";
import { CgDanger } from "react-icons/cg";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Apps } from "../../App";

function Login() {
  // Receiving Context Api
  const { SecurityAct, setSecurityAct } = useContext(Apps);

  // UseStates
  const [value3, setValue3] = useState("example@gmail.com");
  const [value4, setValue4] = useState(1234);
  const [error, setError] = useState(false);

  //   UseNavigate For Going To Home Page
  const Navigate = useNavigate();

  //   Login Function
  function login() {
    // Checking For Logins
    if (value3 == "example@gmail.com" && value4 == 1234) {
      Navigate("/Home");
      setSecurityAct(true);
    } else {
      setError(true);
    }
  }

  return (
    <div className="login__zero">
      <div className="login__one">
        <h2 className="login__header">Log in</h2>
        <p>Enter your credentials to access your account.</p>

        <button className="login__btn">
          <FcGoogle />
          Log in with Google
        </button>
        <div className="horizontal">
          <div className="before"></div>
          <p className="or">or</p>
          <div className="after"></div>
        </div>
        {/* <form> */}
        <label className="label__one" htmlFor="">
          Email address
          <input
            value={value3}
            onChange={(e) => setValue3(e.target.value)}
            type="email"
            autoComplete="off"
            placeholder="name@company.com"
            name="email"
            id="email"
            className={`input2 ${error ? "errorInput" : ""}`}
          />
        </label>
        <div className="login__password">
          <label className="label__two" htmlFor="password">
            Password
            <p>Forget password?</p>
          </label>
          <input
            value={value4}
            onChange={(e) => setValue4(e.target.value)}
            type="password"
            autoComplete="off"
            placeholder="28dnd@msk"
            name="password"
            id="password"
            className={`input1 ${error ? "errorInput" : ""}`}
          />
        </div>
        <div className="error">
          {error && <CgDanger />}
          <p>{error && ` Invalid Email or Password`}</p>
        </div>
        <label className="remember" htmlFor="remember">
          <input type="checkbox" name="remember" id="" />
          Remember information
        </label>
        <button
          onClick={() => {
            login();
          }}
          className="login__final"
        >
          Login
        </button>
        {/* </form> */}
        <div className="signup">
          <p>
            Not a member? <small>Sign up</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
