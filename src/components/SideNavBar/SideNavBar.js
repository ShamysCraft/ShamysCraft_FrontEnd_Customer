
import { Typography } from "@material-ui/core"
import React from "react"
import {sideBarData} from "./sideBarData"

const SideNavBar = ()=>{
    return(
       <div className="sidebar">
           <Typography variant="h2">Category</Typography>
           <ul className = "sidebarList">
           {sideBarData.map((val,key)=>{
           return (
            <li key={key} 
                className="row"
                onClick={()=>{window.location.pathname = val.link}}>
               {""}
               <div id="title">
                   {val.title}
               </div>
           </li>)
       })}
       </ul>
       </div>
    )
}

export default SideNavBar