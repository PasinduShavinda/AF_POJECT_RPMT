import { Button, Typography, Box, responsiveFontSizes } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
      <Button
          LinkComponent={Link}
          to="/addRsTopics"
          sx={{ marginTop: 15, background: "orangered"}}
          variant="contained"
        >
          <Typography variant="h3">Student - Submit Research Topics</Typography>
        </Button>
        
        <Button
          LinkComponent={Link}
          to="/RsTopics"
          sx={{ marginTop: 15, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">STUDENT - View/Update/Delete Topics</Typography>
        </Button>

        <Button
          LinkComponent={Link}
          to="/RsTopicsSupervisor"
          sx={{ marginTop: 15, background: "Blue" }}
          variant="contained"
        >
          <Typography variant="h3">SUPERVISOR - View All research topics submitted by students</Typography>
        </Button>

        <Button
          LinkComponent={Link}
          to="/addRsTopicsNotice"
          sx={{ marginTop: 15, background: "Green" }}
          variant="contained"
        >
          <Typography variant="h3">Admin-Add Research topic Submission</Typography>
        </Button>

        <Button
          LinkComponent={Link}
          to="/RsTopicsNotices"
          sx={{ marginTop: 15, background: "Green" }}
          variant="contained"
        >
          <Typography variant="h3">Admin-View/update/delete Topic submission Notices</Typography>
        </Button>

        <Button
          LinkComponent={Link}
          to="/RsTopicsNoticesStudent"
          sx={{ marginTop: 15, background: "Green" }}
          variant="contained"
        >
          <Typography variant="h3">Student Research Topic submission Notices</Typography>
        </Button>


      </Box>
    </div>
  );
};

export default Home;
