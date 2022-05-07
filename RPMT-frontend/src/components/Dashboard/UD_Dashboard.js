import React, { useState } from "react";
import "./UD_Dashboard.css";
import { Navigate, useNavigate } from "react-router-dom";
import UD_HomeStudent from "../UD_Student/UD_HomeStudent";
import UD_HomePenalmember from "../UD_Penalmember/UD_HomePenalmember";
import UD_HomeSupervisor from "../UD_Supervisor/UD_HomeSupervisor";

// useHistory  = useNavigate,
//Redirect = Navigate,NavLink

const UD_Dashboard = ({ authorized }) => {
  const [component, setComponent] = useState("production");
  //let history = useNavigate();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user-info-admin");
    //history.push("/");
    navigate("/");
  };

  if (!localStorage.getItem("user-info-admin")) {
    return <Navigate to="/" />;
  }
  return (
    <div className="UDDdashboardMain">
      <div className="UDDleftLinks">
        <div className="UDDphotogroup">
          <div className="UDDphoto"></div>
          <h1 className="UDDprofileName">admin</h1>
        </div>
        <div className="UDDdashLinks">
          <ul className="UDDlinks">
            <li
              onClick={() => {
                setComponent("student");
              }}
              className="UDDlink"
              id={component === "student" ? "active" : ""}
            >
              Student Management
            </li>
            <li
              onClick={() => {
                setComponent("penalmember");
              }}
              className="UDDlink"
              id={component === "penalmember" ? "active" : ""}
            >
              Penalmember Management
            </li>
            <li
              onClick={() => {
                setComponent("supervisor");
              }}
              className="UDDlink"
              id={component === "supervisor" ? "active" : ""}
            >
              Supervisor Management
            </li>
          </ul>
        </div>
        <div className="UDDlgoutbtn" onClick={logout}>
          LOGOUT
        </div>
      </div>
      <div className="UDDhero">
        {component === "student" && <UD_HomeStudent />}
        {component === "penalmember" && <UD_HomePenalmember />}
        {component === "supervisor" && <UD_HomeSupervisor />}
      </div>
    </div>
  );
};

export default UD_Dashboard;
