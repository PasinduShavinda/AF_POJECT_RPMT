import React ,{ useEffect, useState }from 'react'
import axios from "axios"

import Sug_grp_admin from "./sug_grp_admin";
const URL = "http://localhost:5000/group";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Sug_AllGroups_admin = () => {
  const [Groups , setGroups ] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setGroups(data.Groups));
  }, []);
  console.log(Groups);


  return (
    <div id="sug_table"> <ul>
      <h1> Assigne Group Number And Panal</h1>
     <th width={"100px"}>Grpoup Leader</th>
     <th width={"100px"}>Grpoup member2</th>
     <th width={"100px"}>Grpoup member3</th>
     <th width={"100px"}>Grpoup member4</th>
    
     <th width={"100px"}>Action</th>
     <th width={"100px"}>Group ID</th>
     <th width={"100px"}>Panel</th>
     <table>
      {Groups && Groups.map((Groups, i)=>(
        
        <tr  key={i}>
         <Sug_grp_admin  Groups={Groups}/>
        </tr>
      ))}
      </table>
      </ul></div>
  )
}

export default Sug_AllGroups_admin ;

