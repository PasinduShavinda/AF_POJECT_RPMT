import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./shv_rs_topic_notice_styles.css";

const Shv_res_topic_notice_admin = (props) => {

  const history = useNavigate();
  const { _id, ResTopicNoticeHeader, ResTopicNoticeLineOne, ResTopicNoticeLineTwo, ResTopicNoticeLineThree, ResTopicNoticeDueDate } = props.resTopicNotice;
  const deleteHandler = async () => {

    await axios
      .delete(`http://localhost:5000/resTopicsNotice/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/RsTopicsNotices"));
  };

  return (
    <div className="card">

      <center>
      <h4>{ResTopicNoticeHeader}</h4><br/>
      <h4>{ResTopicNoticeLineOne}</h4><br/>
      <h4>{ResTopicNoticeLineTwo}</h4><br/>
      <h4>{ResTopicNoticeLineThree}</h4><br/>
      <h4>Due Date :{ResTopicNoticeDueDate}</h4><br/>
      </center>
  
      <Button LinkComponent={Link} to={`/RsTopicsNotice/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
      </div>
 
  );
};

export default Shv_res_topic_notice_admin;
