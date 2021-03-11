import { Typography } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import {RightNavBarData} from "./RightNavBarData"
function RightNavBar() {
    return ( 
        <div className="sidebar" id="rightNav">
            <Typography style={{textAlign:"center"}} variant="h2">Shop</Typography>
            <ul className="sidebarList">
                {RightNavBarData.map((val,key)=>{
                    return(
                        <li key={key}
                        className="row"
                        >
                            <Link to={`${val.link}`} >
                            {""}
                            <div id="title">
                                {val.title}
                            </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default RightNavBar
