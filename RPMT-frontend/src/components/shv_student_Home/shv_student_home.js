import { Button, Typography, Box, responsiveFontSizes } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './shv_student_home.css';

const StudentHomePage_shv = () => {
  return (
    <div> 
  
  <section id="works"></section>
  <div class="container">
    <div class="row centered mt mb">
      
      <h1 class="d-flex justify-content-center"><b>SUBMISSIONS</b></h1>
      <center><p><b>Click On the Image to jump to submissions !!</b></p></center>
      
      <div class="col-lg-4 col-md-4 col-sm-4 gallery">
        <a href="/addRsTopics"><img src="http://theeurotvplace.com/wp-content/uploads/2019/12/topic-logo.png" class="img-responsive"/></a>
       <center><p><b>Research Topic Submission</b></p></center>
       <Button variant="contained" color="warning" LinkComponent={Link}
          to="/addRsTopics" sx={{ mt: "auto" }}>Submit</Button>&nbsp;&nbsp;
        <Button variant="contained" color="error" LinkComponent={Link}
          to="/RsTopics" sx={{ mt: "auto" }}>View</Button>
      </div>


      <div class="col-lg-4 col-md-4 col-sm-4 gallery">
        <a href="/RsTopicFileHome"><img src="https://movingsocialwork.org/wp-content/uploads/2019/06/research-icon-blue.png" class="img-responsive"/></a>
        <center><p><b>Research Topic Details Submission</b></p></center>
        <Button variant="contained" color="warning" LinkComponent={Link} to="/RsTopicFileHome" sx={{ mt: "auto" }}>Submit</Button>&nbsp;&nbsp;
        <Button variant="contained" color="error" LinkComponent={Link} to="/RsTopiFileList" sx={{ mt: "auto" }}>View</Button>
      </div>
      
      
      <div class="col-lg-4 col-md-4 col-sm-4 gallery">
        <a href="/RsDocHome"><img src="https://www.insidehighered.com/sites/default/server_files/media/file-picture-id696301002.jpg" class="img-responsive"/></a>
        <center><p><b>Final Research Document Submission</b></p></center>
        <Button variant="contained" color="warning" LinkComponent={Link} to="/RsDocHome" sx={{ mt: "auto" }}>Submit</Button>&nbsp;&nbsp;
        <Button variant="contained" color="error" LinkComponent={Link} to="/RsDocFilesList" sx={{ mt: "auto" }}>View</Button>
      </div>
      <center>
      <div class="col-lg-4 col-md-4 col-sm-4 gallery">
        <a href="/ThesisHome"><img src="https://thumbs.dreamstime.com/b/thesis-icon-trendy-design-style-isolated-white-background-vector-simple-modern-flat-symbol-web-site-mobile-logo-app-135733053.jpg" class="img-responsive"/></a>
        <center><p><b> Final Thesis Document Submission</b></p></center>
        <Button variant="contained" color="warning" LinkComponent={Link} to="/ThesisHome" sx={{ mt: "auto" }}>Submit</Button>&nbsp;&nbsp;
        <Button variant="contained" color="error"  LinkComponent={Link} to="/ThesisFilesList" sx={{ mt: "auto" }}>View</Button>
      </div>
      </center>
    
    
     
     
    </div>
  </div>
  

    </div>
  );
};

export default StudentHomePage_shv;
