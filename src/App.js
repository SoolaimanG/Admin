import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/Login/login";
import "./index.css";
import Home from "./Pages/Home/home";
import { createContext, useEffect, useState } from "react";
import Tasks from "../src/Pages/Tasks/task";
import { Taskss } from "./data";
import Search from "./Pages/Searched/search";
import EmployeePage from "./Pages/EmployeePage/employeepage";
import { Employees } from "./data";
import Profile from "./Pages/Profile/profile";
import SearchEmployee from "./Pages/SearchEmployee/searchemployee";
import NewEmployee from "./Pages/NewEmployee/newemployee";
import FilterList from "./Pages/FilterList/filterlist";
import Products from "./Pages/Products/product";
import { Product } from "./data";
import ViewProduct from "./Pages/ViewProduct/viewproduct";
import CreateProduct from "./Pages/CreateProduct/createproduct";
import Users from "./Pages/Users/users";
import { usersss } from "./data";
import Application from "./Pages/Application/application";
import Admin from "./Pages/Admin/admin";
import AdminBasic from "./Pages/AdminBasic/adminbasic";
import AdminPassword from "./Pages/AdminPassword/adminpassword";
import AdminPersonal from "./Pages/Adminpersonal/adminpersonal";
import AdminSetting from "./Pages/AdminSetting/adminsettimg";

export const Apps = createContext();

function App() {
  // Usestate
  const [shownav, setShownav] = useState(false);
  const [users, setUsers] = useState(usersss);
  const [displayName, setDisplayName] = useState("Soolaiman");
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("em")) || Employees
  );
  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem("products")) || Product
  );

  // UseDate
  const [DateAct, setDateAct] = useState(
    JSON.parse(localStorage.getItem("key1")) || Taskss
  );

  const [SecurityAct, setSecurityAct] = useState(
    JSON.parse(localStorage.getItem("key")) || false
  );

  // Local Storage
  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(SecurityAct));
  }, [SecurityAct]);

  useEffect(() => {
    localStorage.setItem("key1", JSON.stringify(DateAct));
    localStorage.setItem("em", JSON.stringify(employees));
    localStorage.setItem("products", JSON.stringify(product));
  });

  const contextValue = {
    SecurityAct,
    setSecurityAct,
    DateAct,
    setDateAct,
    employees,
    setEmployees,
    product,
    setProduct,
    usersss,
    setUsers,
    displayName,
    setDisplayName,
  };

  // Protecting Route
  const Security = ({ children }) => {
    return SecurityAct ? children : <Navigate to={"/"} />;
  };

  return (
    <>
      <Apps.Provider value={contextValue}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/Home"
            element={
              <Security>
                <Home shownav={shownav} setShownav={setShownav} />
              </Security>
            }
          />
          <Route
            path="/Tasks"
            element={
              <Security>
                <Tasks />
              </Security>
            }
          />
          <Route
            path="/Tasks/:id"
            element={
              <Security>
                <Search />
              </Security>
            }
          />
          <Route
            path="/Employee"
            element={
              <Security>
                <EmployeePage />
              </Security>
            }
          />
          <Route
            path="/Employee/:name"
            element={
              <Security>
                <Profile />
              </Security>
            }
          />
          <Route
            path="/Search/:query"
            element={
              <Security>
                <SearchEmployee />
              </Security>
            }
          />
          <Route
            path="/CreateNew"
            element={
              <Security>
                <NewEmployee />
              </Security>
            }
          />
          <Route
            path="/Filter/:id"
            element={
              <Security>
                <FilterList />
              </Security>
            }
          />
          <Route
            path="/Products"
            element={
              <Security>
                <Products />
              </Security>
            }
          />
          <Route
            path="/Products/:id"
            element={
              <Security>
                <ViewProduct />
              </Security>
            }
          />
          <Route
            path="/CreateProduct"
            element={
              <Security>
                <CreateProduct />
              </Security>
            }
          />
          <Route
            path="/Users"
            element={
              <Security>
                <Users />
              </Security>
            }
          />
          <Route
            path="/App"
            element={
              <Security>
                <Application />
              </Security>
            }
          />
          <Route
            path="/Admin/Profile"
            element={
              <Security>
                <Admin />
              </Security>
            }
          />
          <Route
            path="/Admin/Account"
            element={
              <Security>
                <AdminBasic />
              </Security>
            }
          />
          <Route
            path="/Admin/Password"
            element={
              <Security>
                <AdminPassword />
              </Security>
            }
          />
          <Route
            path="/Admin/Personal"
            element={
              <Security>
                <AdminPersonal />
              </Security>
            }
          />
          <Route
            path="/Admin/Settings"
            element={
              <Security>
                <AdminSetting />
              </Security>
            }
          />
          {/* <Route
            path="/Admin/Account"
            element={
              <Security>
                <Admi />
              </Security>
            }
          /> */}
        </Routes>
      </Apps.Provider>
    </>
  );
}

export default App;
