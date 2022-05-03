import React, { useState } from "react";
import "./UD_HomePenalmember.css";
import UD_ManagePenalmember from "./UD_MangePenalmember";
import UD_AddPenalmember from "./UD_AddPenalmember";
// import SupplierReport from "./SupplierReport";

const UD_HomePenalmember = () => {
  const [component, setComponent] = useState("penalmember");

  return (
    <div>
      {component === "penalmember" && (
        <PenalmemberMain onClick={setComponent} />
      )}

      {component === "managePenalmember" && (
        <UD_ManagePenalmember onClick={setComponent} />
      )}

      {component === "addPenalmember" && (
        <UD_AddPenalmember onClick={setComponent} />
      )}

      {/* {component === "supplierReport" && (
        <SupplierReport onClick={setComponent} />
      )}  */}
    </div>
  );
};

const PenalmemberMain = (props) => {
  return (
    <div className="UD_row">
      <div className="UD_suppliermain">
        <div className="UD_supplierbutton">
          <div
            className="UD_addSupplier"
            onClick={() => props.onClick("managePenalmember")}
          ></div>
          <h5> Penalmember Deatials</h5>
        </div>

        <div className="UD_addorderbutton">
          <div
            className="UD_addOrder"
            onClick={() => props.onClick("manageorder")}
          ></div>
          <h5>Add Order Deatials</h5>
        </div>

        <div className="UD_supplierreportbutton">
          <div
            className="UD_supplierreport"
            onClick={() => props.onClick("reportGenarate")}
          ></div>
          <h5>Generate Report</h5>
        </div>
      </div>
    </div>
  );
};

export default UD_HomePenalmember;
