import React, { useState } from "react";
import "./UD_HomeStudent.css";
import UD_ManageStudent from "./UD_MangeStudent";
import UD_AddStudent from "./UD_AddStudent";
import UD_StudentReport from "./UD_StudentReport";

const UD_HomeStudent = () => {
  const [component, setComponent] = useState("student");

  return (
    <div>
      {component === "student" && <StudentMain onClick={setComponent} />}

      {component === "manageStudent" && (
        <UD_ManageStudent onClick={setComponent} />
      )}

      {component === "addStudent" && <UD_AddStudent onClick={setComponent} />}

      {component === "studentReport" && (
        <UD_StudentReport onClick={setComponent} />
      )}
    </div>
  );
};

const StudentMain = (props) => {
  return (
    <div className="UD_row">
      <div className="UD_suppliermain">
        <div className="UD_supplierbutton">
          <div
            className="UD_addSupplier"
            onClick={() => props.onClick("manageStudent")}
          ></div>
          <h5> Student Deatials</h5>
        </div>

        <div className="UD_addorderbutton">
          <div
            className="UD_addOrder"
            onClick={() => props.onClick("studentReport")}
          ></div>
          <h5>Generate StudentReport</h5>
        </div>

        {/* <div className="UD_supplierreportbutton">
          <div
            className="UD_supplierreport"
            onClick={() => props.onClick("studentReport")}
          ></div>
          <h5>Generate StudentReport</h5>
        </div> */}
      </div>
    </div>
  );
};

export default UD_HomeStudent;
