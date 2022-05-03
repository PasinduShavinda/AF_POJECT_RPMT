import React, { useState } from "react";
import "./UD_HomeSupervisor.css";
import UD_ManageSupervisor from "./UD_MangeSupervisor";
import UD_AddSupervisor from "./UD_AddSupervisor";
// import SupplierReport from "./SupplierReport";

const UD_HomeSupervisor = () => {
  const [component, setComponent] = useState("supervisor");

  return (
    <div>
      {component === "supervisor" && <SupervisorMain onClick={setComponent} />}

      {component === "manageSupervisor" && (
        <UD_ManageSupervisor onClick={setComponent} />
      )}

      {component === "addSupervisor" && (
        <UD_AddSupervisor onClick={setComponent} />
      )}

      {/* {component === "supplierReport" && (
        <SupplierReport onClick={setComponent} />
      )}  */}
    </div>
  );
};

const SupervisorMain = (props) => {
  return (
    <div className="UD_row">
      <div className="UD_suppliermain">
        <div className="UD_supplierbutton">
          <div
            className="UD_addSupplier"
            onClick={() => props.onClick("manageSupervisor")}
          ></div>
          <h5> Supervisor Deatials</h5>
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

export default UD_HomeSupervisor;
