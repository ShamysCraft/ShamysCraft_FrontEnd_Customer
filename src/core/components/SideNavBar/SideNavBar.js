
import { Typography } from "@material-ui/core"
import React from "react"
import { sideBarData } from "./sideBarData"
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"
import {MoreVert,List} from "@material-ui/icons"
import {COLOURS} from "../../../theme/colors"

const useStyles = makeStyles((theme) => ({

    sidebar: {
        position: 'fixed',
        height: '80%',
        width: '200px',
        backgroundColor: 'white',
        margin: '50px 0 25px 0',
        borderRadius: '5px',

    },

    sidebarList: {
        height: 'auto',
        marginTop: '20px',
        width: '100%',
        padding: '8px'
    },

    row: {
        width: '100%',
        height: '60px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        outline: '0 !important',
        backgroundColor: '#E3E3E3',
        paddingLeft: '10px',
        borderRadius: '2px'


    },
icon:{
    // display:'flex',
    // height: '64px'
},
    title: {
        flex: '70%',
        display: 'grid',
        placeItems: 'center',
        padding: '20px',
        textDecoration: 'none',
        color: 'black',
        outline: 0,


        "&:active": {
            color: 'black',

        },
        "&:focus": {
            color: 'black',



        },
        "&:hover": {
            textDecoration: ` 2px underline ${COLOURS.darkBlue}`,
            // width: '100px',
            // backgroundColor: '#d8e2dc',
            // boxShadow: '0px 0px 10px 8px #d8e2dc'
        }
        ,
        "&:visited": {
            color: 'black',
            textDecoration: 'none'

        }
    }

}));
const SideNavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.sidebar}>
            
             <ul className={classes.sidebarList}>
                <li className={classes.row} ><MoreVert/><Link style={{ textDecoration: 'none' }} to='/shop'><Typography className={classes.title}>Pottery</Typography></Link></li>
                <li className={classes.row} ><MoreVert/><Link style={{ textDecoration: 'none' }} to='/shopSales'><Typography className={classes.title}>Jwellery</Typography></Link></li>
                <li className={classes.row} ><MoreVert/><Link style={{ textDecoration: 'none' }} to='/addItem'><Typography className={classes.title}>Wall Art</Typography></Link></li>
                <li className={classes.row} ><MoreVert/><Link style={{ textDecoration: 'none' }} to='/pendingOrder'><Typography className={classes.title}>Wood Work</Typography></Link></li>
                <li className={classes.row} ><MoreVert/><Link style={{ textDecoration: 'none' }} to='/confirmOrder'><Typography className={classes.title}>Paper Craft</Typography></Link></li>
                <li className={classes.row} ><MoreVert/><Link style={{ textDecoration: 'none' }} to='/rejectedOrder'><Typography className={classes.title}>Stationary</Typography></Link></li>
            </ul>
        </div>
    )
}

export default SideNavBar