
import { Typography } from "@material-ui/core"
import React from "react"
import {sideBarData} from "./sideBarData"
import {Link} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles"
import {COLOURS} from "../../theme/colors"
const useStyles = makeStyles((theme)=>({
    category:{
        textAlign:"center",
        padding: '20px',
        backgroundColor: '#d8e2dc',
        boxShadow: '0 0 10px #d8e2dc '
    },
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
        outline: '0 !important',


    },

    title:{
        flex: '70%',
        display: 'grid',
        placeItems: 'center',
        padding: '20px',
        textDecoration:'none',
        color: 'black',
        outline: 0,

        
        "&:active":{
            color: 'black',
                       
        },
        "&:focus":{
            color: 'black',
            

            
        },
        "&:hover":{
            textDecoration: ` 2px underline ${COLOURS.darkBlue}` ,
            width: '100px',
            // backgroundColor: '#d8e2dc',
            // boxShadow: '0px 0px 10px 8px #d8e2dc'
        }
        ,
        "&:visited":{
            color: 'black',
            textDecoration: 'none'

        }
    }

}));
const SideNavBar = ()=>{
    const classes = useStyles();
    return(
       <div className={classes.sidebar}>
           <Typography variant="h4" style={{}} className={classes.category}>Category</Typography>
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