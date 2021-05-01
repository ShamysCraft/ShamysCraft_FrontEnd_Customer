import { Typography } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import {RightNavBarData} from "./RightNavBarData"
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
function RightNavBar() {
    const classes = useStyles();
    return ( 
        <div className={classes.sidebar} id="rightNav">
            <Typography style={{textAlign:"center"}} variant="h2">Shop</Typography>
            <ul className={classes.sidebarList}>
                {RightNavBarData.map((val,key)=>{
                    return(
                        <li key={key}
                        className={classes.row}
                        >
                            <Link style={{textDecoration:'none'}} to={`${val.link}`} 
                            >
                            {""}
                            <div className={classes.title}>
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
