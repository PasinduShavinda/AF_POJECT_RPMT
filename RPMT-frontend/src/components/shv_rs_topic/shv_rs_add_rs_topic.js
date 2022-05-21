import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box, color } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/shv_rs_topic.css";

const Shv_rs_add_rs_topic = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    ResTopicgroupId: "",
    ResTopicsupervisor: "",
    ResTopicresearchArea: "",
    ResTopicResearchTopic: ""
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/resTopics", {
        ResTopicgroupId: String(inputs.ResTopicgroupId),
        ResTopicsupervisor: String(inputs.ResTopicsupervisor),
        ResTopicresearchArea: String(inputs.ResTopicresearchArea),
        ResTopicResearchTopic: String(inputs.ResTopicResearchTopic)

      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/RsTopics"));
  };

  return (
    <div>
     
    <div className="bodyRsTopic">
    <a href="/stdHome"><button class="previous round">&#8249;</button></a>
              <center>
        <h1 className="h3 mb-3 font-weight-normal"><font face = "Comic sans MS" size ="6"><b>Submit Research Topic</b></font></h1>
         </center> 
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={5}
      ><br/>
        <FormLabel><b>Group ID</b></FormLabel>
        <TextField className = "textfield"
          value={inputs.ResTopicgroupId}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="filled"
          name="ResTopicgroupId"
        /><br/>
        <FormLabel><b>Supervisor's Name</b></FormLabel>
        <TextField className = "textfield"
          value={inputs.ResTopicsupervisor}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="filled"
          name="ResTopicsupervisor"
        /><br/>
        <FormLabel><b>Research Area</b></FormLabel>
        <TextField className = "textfield"
          value={inputs.ResTopicresearchArea}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="filled"
          name="ResTopicresearchArea"
        /><br/>
        <FormLabel><b>Research Topic</b></FormLabel>
        <TextField className = "textfield"
          value={inputs.ResTopicResearchTopic}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="filled"
          name="ResTopicResearchTopic"
        /><br/>
        <br/>
        <Button variant="contained" color="primary" size = "large" type="submit">
          Submit Your Research Topic
        </Button>
      </Box>
    </form>

    </div>
    </div>
  );
};

export default Shv_rs_add_rs_topic;
