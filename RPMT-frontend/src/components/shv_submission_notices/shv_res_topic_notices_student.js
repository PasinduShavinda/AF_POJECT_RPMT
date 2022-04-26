import React, { useEffect, useState } from "react";
import axios from "axios";
import Shv_res_topic_notice_student from "./shv_res_topic_notice_student";
import "./shv_rs_topic_notice_styles.css";
import { Button, Typography, Box, responsiveFontSizes } from "@mui/material";
import { Link } from "react-router-dom";
const URL = "http://localhost:5000/resTopicsNotice";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Shv_res_topic_notices_student = () => {

  const [resTopicsNotices, setresTopicsNotices] = useState();
  
  useEffect(() => {
  
    fetchHandler().then((data) => setresTopicsNotices(data.resTopicsNotices));
  
  }, []);
  
  console.log(resTopicsNotices);
  
  return (
    <div>
      <br/>
      <br/>
      <center>
      <h1>Notices - Research Topic submission</h1>
      </center>
      <br/>
      <ul>
        {resTopicsNotices &&
          resTopicsNotices.map((resTopicNotice, i) => (
            <li key={i}>
              <Shv_res_topic_notice_student resTopicNotice={resTopicNotice} />
            </li>
          ))}
      </ul>
      <Box display="flex" flexDirection="column" alignItems="center">
      <Button
          LinkComponent={Link}
          to="/addRsTopics"
          sx={{ marginTop: 5, marginBottom:5, background: "blue"}}
          variant="contained"
        >
          <Typography variant="h3">Click Here To Submit Your Research Topic</Typography>
        </Button>
        </Box>
    </div>
  );
};

export default Shv_res_topic_notices_student;
