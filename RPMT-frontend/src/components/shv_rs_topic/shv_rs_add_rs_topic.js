import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Shv_rs_add_rs_topic = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    ResTopicgroupId: "",
    ResTopicsupervisor: "",
    ResTopicresearchArea: "",
    ResTopicResearchTopic: "",
    ResTopicdateEntered: "",
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
        ResTopicResearchTopic: String(inputs.ResTopicResearchTopic),
        ResTopicdateEntered: String(inputs.ResTopicdateEntered)

      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/RsTopics"));
  };

  return (
    <div className="container">
              <center>
        <h1 className="h3 mb-3 font-weight-normal" style = {{backgroundColor:'cyan'}}><font face = "Comic sans MS" size =""><b>Submit Research Topic</b></font></h1>
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
      >
        <FormLabel>Group ID</FormLabel>
        <TextField
          value={inputs.ResTopicgroupId}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="filled"
          name="ResTopicgroupId"
        />
        <FormLabel>Supervisor's Name</FormLabel>
        <TextField
          value={inputs.ResTopicsupervisor}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="filled"
          name="ResTopicsupervisor"
        />
        <FormLabel>Research Area</FormLabel>
        <TextField
          value={inputs.ResTopicresearchArea}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="filled"
          name="ResTopicresearchArea"
        />
        <FormLabel>Research Topic</FormLabel>
        <TextField
          value={inputs.ResTopicResearchTopic}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="filled"
          name="ResTopicResearchTopic"
        />
        <FormLabel>Date</FormLabel>
        <TextField
          value={inputs.ResTopicdateEntered}
          onChange={handleChange}
          type="Date"
          margin="normal"
          fullWidth
          variant="filled"
          name="ResTopicdateEntered"
        />
        <br/>
        <Button variant="contained" type="submit">
          Submit Your Research Topic
        </Button>
      </Box>
    </form>

    </div>
  );
};

export default Shv_rs_add_rs_topic;
