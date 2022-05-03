import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import {Box,Button,FormLabel,TextareaAutosize,TextField,} from "@mui/material";

const Sug_Topicdoc_updatefeedback = () => {
     
  const [inputs, setInputs] = useState({});
    const id =useParams().id;
    const history = useNavigate();


    useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/topicdoc_feedback2/${id}`)
        .then((res) => res.data)
        .then(data=>setInputs(data.Feedbacks))
           
        };
        fetchHandler()
      }, [id]);

     
      const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
      const sendRequest = async () => {
        await axios
          .put(`http://localhost:5000/topicdoc_feedback2/${id}`, {
            ResTopicFileGroupId: String(inputs.ResTopicFileGroupId),
            ResTopicFilePanel: String(inputs.ResTopicFilePanel),
            Feedback: String(inputs.Feedback),
            EvaluvatedDate: String(inputs.EvaluvatedDate),
          })
          .then((res) => res.data);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(() => history("/AllTopicDocFeedback"));
      };
    
    
  return (
    <div>
     {inputs && (
   <form onSubmit={handleSubmit} >
     <h1>Update given feedbacks on topic documentation submition</h1>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={"center"}
      maxWidth={700}
      alignContent={"center"}
      alignSelf="center"
      marginLeft={"auto"}
      marginRight="auto"
      marginTop={10}
    >
      <FormLabel> GroupId</FormLabel>
      <TextField
         value={inputs.ResTopicFileGroupId}
         onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="ResTopicFileGroupId"
      />
          <FormLabel> panel Id</FormLabel>
      <TextField
         value={inputs.ResTopicFilePanel}
         onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="ResTopicFilePanel"
      />
     
<FormLabel>Feedback</FormLabel>
<textarea   rows="10" cols="50"
        value={inputs.Feedback}
        onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="Feedback"
      />
       <FormLabel>EvaluvatedDate</FormLabel>
  <input type="Date"
        value={inputs.EvaluvatedDate}
        onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="EvaluvatedDate"
      />

      <button variant="contained" type="submit"> Update Feedback </button>
    </Box>
  </form>
     )}
    </div>
  );
};

export default Sug_Topicdoc_updatefeedback ;