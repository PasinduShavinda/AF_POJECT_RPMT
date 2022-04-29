import React,{ useState }  from 'react';
import {AppBar, Toolbar, Typography,Tab, Tabs} from "@mui/material"
import { NavLink } from "react-router-dom";

const Sug_page=()=>{
    const [value, setValue] = useState();
    return<div>

     <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
         <Toolbar>
         <Typography> Panelmembers</Typography>

         <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/createPanel" label="Create Panel" />
            <Tab LinkComponent={NavLink} to="/allPanel" label="All Panel" />
            
          </Tabs>
         </Toolbar>
       
     </AppBar>
    </div>
};

export default Sug_page;