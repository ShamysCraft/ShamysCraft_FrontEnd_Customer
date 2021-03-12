
import { Typography } from "@material-ui/core"
import React from "react"
import {sideBarData} from "./sideBarData"
import {Link} from 'react-router-dom'
const SideNavBar = ()=>{
    return(
       <div className="sidebar">
           <Typography variant="h2" style={{textAlign:"center"}}>Category</Typography>
           <ul className = "sidebarList">
           {sideBarData.map((val,key)=>{
           return (
            <li key={key} 
                className="row"
                >
                <Link style={{textDecoration:'none'}} to={`${val.link}`}>
               {""}
               <div id="title">
                   {val.title}
               </div>
                </Link>
           </li>)
       })}
       </ul>
       </div>
    )
}

export default SideNavBar