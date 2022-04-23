import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Shv_rs_topic_details = () => {

  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const history = useNavigate();
  
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/resTopics/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.resTopics));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/resTopics/${id}`, {
        ResTopicgroupId: String(inputs.ResTopicgroupId),
        ResTopicsupervisor: String(inputs.ResTopicsupervisor),
        ResTopicresearchArea: String(inputs.ResTopicresearchArea),
        ResTopicResearchTopic: String(inputs.ResTopicResearchTopic),
        ResTopicdateEntered : String(inputs.ResTopicdateEntered),
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/RsTopics"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {inputs && (
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
          variant="outlined"
          name="ResTopicgroupId"
        />
        <FormLabel>Supervisor's Name</FormLabel>
        <TextField
          value={inputs.ResTopicsupervisor}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="ResTopicsupervisor"
        />
        <FormLabel>Research Area</FormLabel>
        <TextField
          value={inputs.ResTopicresearchArea}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="ResTopicresearchArea"
        />
        <FormLabel>Research Topic</FormLabel>
        <TextField
          value={inputs.ResTopicResearchTopic}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="ResTopicResearchTopic"
        />
        <FormLabel>Date</FormLabel>
        <TextField
          value={inputs.ResTopicdateEntered}
          onChange={handleChange}
          type="Date"
          margin="normal"
          fullWidth
          variant="outlined"
          name="ResTopicdateEntered"
        />
        <br/>
        <Button variant="contained" type="submit">
          Update Research Topic
        </Button>
      </Box>
        </form>
      )}
    </div>
  );
};

export default Shv_rs_topic_details;
