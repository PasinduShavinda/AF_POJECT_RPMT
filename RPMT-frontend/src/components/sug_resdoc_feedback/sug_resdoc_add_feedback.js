import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import {Box,Button,FormLabel,TextField,} from "@mui/material";


const Sug_Resdoc_addfeedback = () => {
     
  const [inputs, setInputs] = useState({});
    const id =useParams().id;
    const history = useNavigate();


    useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/resdoc_feedback/${id}`)
        .then((res) => res.data)
        .then(data=>setInputs(data.feedbacks))
           
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
          .post("http://localhost:5000/resdoc_feedback2", {
            ResDocFileGroupId: String(inputs.ResDocFileGroupId),
            ResDocFileSupervisor: String(inputs.ResDocFileSupervisor),
            ResDocFileTopic: String(inputs. ResDocFileTopic),
            Feedback: String(inputs. Feedback),
            EvaluvatedDate: String(inputs.EvaluvatedDate),
          })
          .then((res) => res.data);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(() => history("/AllResDocFeedback"));
      };
    
    
  return (
    <div>
       <h1>Give Feedback for Reserch Document</h1>
     {inputs && (
   <form onSubmit={handleSubmit} >
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

      <FormLabel> ResDocFileGroupId</FormLabel>
      <TextField
         value={inputs. ResDocFileGroupId}
         onChange={handleChange}
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
        fullWidth
        variant="standard"
        name="ResDocFileGroupId"
      />
      

     
     
<FormLabel>Feedback</FormLabel>
<textarea   rows="10" cols="50"
        value={inputs.Feedback}
        onChange={handleChange}
        margin="normal"
        fullWidth
        variant="standard"
        name="Feedback"
      />


       <FormLabel>EvaluvatedDate</FormLabel>
      <input type="Date"
        value={inputs.EvaluvatedDate}
        onChange={handleChange}
        margin="normal"
        fullWidth
        variant="standard"
        name="EvaluvatedDate"
      />
     
   
      <br></br>

      <Button variant="contained" type="submit"> add Feedback </Button>
    </Box>
  </form>
     )}
    </div>
  );
};

export default Sug_Resdoc_addfeedback;