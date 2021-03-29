
import { Typography } from "@material-ui/core"
import React from "react"
import {sideBarData} from "./sideBarData"
import {Link} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles"
const useStyles = makeStyles((theme)=>({
    sidebar:{
        position: 'fixed',
        height: '80%',
        width: '200px',
        backgroundColor: 'white',
        /* margin: 50px 0 25px 0, */
        borderRadius: '5px',
        
    },

    sidebarList:{
        height: 'auto',
        padding: 0,
        width: '100%'
    },

    row:{
        width: '100%',
        height: '60px',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
         alignItems: 'center',

        "&:hover":{
            cursor: 'pointer',
            fontSize: '20px',
            backgroundColor: 'gray'
        }
    },

    title:{
        flex: '70%',
        display: 'grid',
        placeItems: 'center',
        padding: '20px',
    }

}));
const SideNavBar = ()=>{
    const classes = useStyles();
    return(
       <div className={classes.sidebar}>
           <Typography variant="h2" style={{textAlign:"center"}}>Category</Typography>
           <ul className = "sidebarList">
           {sideBarData.map((val,key)=>{
           return (
            <li key={key} 
            className={classes.row}
                >
                <Link style={{textDecoration:'none'}} to={`${val.link}`}>
               {""}
               <div className={classes.title}>
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