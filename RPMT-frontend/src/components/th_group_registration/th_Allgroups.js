import React ,{ useEffect, useState }from 'react'
import axios from "axios"

import Th_groups from "./th_group";
const URL = "http://localhost:5000/group";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Th_AllGroups = () => {
  const [Groups , setGroups ] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setGroups(data.Groups));
  }, []);
  console.log(Groups);


  return (
    <div id="sug_table"> <ul>
      <h1>Groups Details</h1>
     <td width={"200px"}>Grpoup Leader</td>
     <td width={"200px"}>Grpoup member2</td>
     <td width={"200px"}>Grpoup member3</td>
     <td width={"200px"}>Grpoup member4</td>
     <td width={"200px"}>Group ID</td>
     <td width={"200px"}>Panel</td>
     <td width={"200px"}>Final marks</td>
     <table>
      {Groups && Groups.map((Groups, i)=>(
        
        <tr  key={i}>
         <Th_groups Groups={Groups}/>
        </tr>
      ))}
      </table>
      </ul></div>
  )
}

export default Th_AllGroups ;