import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// useHistory  = useNavigate
//Redirect = Navigate
//import { useNavigate } from "react-router-dom";
//import { Navigate } from "react-router-dom";
//import Logo from "../../assets/logo.png";
import "./UD_Supervisor.css";
import axios from "axios";
//import { CartContext } from "../../Context/CartContext";

const UD_Supervisor = ({ location }) => {
  const navigate = useNavigate();
  //const [component, setComponent] = useState("home");
  const [count, setCount] = useState(0);

  const Logout = () => {
    localStorage.removeItem("user-info-customer");
    navigate("/");
  };

  useEffect(() => {
    if (location.state == null) {
      localStorage.removeItem("user-info-customer");
      navigate("/");
    }
    axios
      .get(`http://localhost:5000/addcart`) //retrieving data from the database
      .then((res) => {
        var cartitems = res.data.data.filter((cart) =>
          cart.cusid
            .toLocaleLowerCase()
            .includes(location.state.currentUser._id)
        );
        setCount(cartitems.length);
      });
  });

  if (!localStorage.getItem("user-info-customer")) {
    return <Navigate to="/" />;
  }

  return (
    <div>helo</div>
    // <CartContext.Provider value={{ count, setCount }}>
    //   <div
    //     classname="Supervisor"
    //     style={{
    //       height: "100vh",
    //       width: "100%",
    //       display: "flex",
    //       flexDirection: "column",
    //       justifyContent: "space-between",
    //     }}
    //   >
    //     <div className="Supervisornavbar">
    //       <div className="Supervisorlogowrapper">
    //         <div className="Supervisorimgwrapper">
    //           <img src={Logo} alt="" className="Supervisorlogo"></img>
    //         </div>
    //         <h3 className="Supervisorlogoname">
    //           Hello,
    //           {location.state != null
    //             ? location.state.currentUser.firstName
    //             : ""}
    //         </h3>
    //       </div>
    //       <div className="navlink">
    //         <div className="Supervisorlinks">
    //           <li
    //             onClick={() => {
    //               setComponent("home");
    //             }}
    //             className="Supervisorlink"
    //           >
    //             HOME
    //           </li>

    //           <li
    //             onClick={() => {
    //               setComponent("about");
    //             }}
    //             className="Supervisorlink"
    //           >
    //             ABOUT
    //           </li>
    //           <li
    //             onClick={() => {
    //               setComponent("contact");
    //             }}
    //             className="Supervisorlink"
    //           >
    //             CONTACT
    //           </li>
    //         </div>
    //       </div>

    //       <div className="Supervisorbtnwrapper">
    //         {/* <div className="cartwrapper">
    //           <div className="circle-cart">{count}</div>
    //           <img
    //             onClick={() => {
    //               setComponent("cart");
    //             }}
    //             src={imgUrl}
    //             alt=""
    //             className="cart-img"
    //           />
    //         </div> */}

    //         <button onClick={Logout} className="Supervisorbtn">
    //           LOGOUT
    //         </button>
    //       </div>
    //     </div>

    //     <div className="Supervisor">
    //       {component === "home" && <Home />}
    //       {component === "about" && <About />}
    //       {component === "contact" && <Contact />}
    //     </div>
    //   </div>
    // </CartContext.Provider>
  );
};

export default UD_Supervisor;
