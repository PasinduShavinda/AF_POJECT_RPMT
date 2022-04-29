import { Link, useNavigate } from "react-router-dom";
import "./shv_rs_topic_notice_styles.css";

const Shv_res_topic_notice_student = (props) => {

  const history = useNavigate();
  const { _id, ResTopicNoticeHeader, ResTopicNoticeLineOne, ResTopicNoticeLineTwo, ResTopicNoticeLineThree, ResTopicNoticeDueDate } = props.resTopicNotice;


  return (
    <div className="shv_card">

      <center>
      <h4>{ResTopicNoticeHeader}</h4><br/>
      <h4>{ResTopicNoticeLineOne}</h4><br/>
      <h4>{ResTopicNoticeLineTwo}</h4><br/>
      <h4>{ResTopicNoticeLineThree}</h4><br/>
      <h4>Due Date :{ResTopicNoticeDueDate}</h4><br/>
      </center>
  
      </div>
 
  );
};

export default Shv_res_topic_notice_student;
