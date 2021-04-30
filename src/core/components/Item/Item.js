import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import pic from "./pot.jpg"
import Dialog from '@material-ui/core/Dialog';
import ViewItem from "../../../user/ViewItemPage"
// import logo from "src/assets/pot.jpg"
import { Button, Card, CardContent, CardMedia, DialogActions, DialogContent, Typography } from "@material-ui/core"
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
const useStyles = makeStyles(theme => ({

    card: {
        width: '240px',
        height: '300px',
        margin: '10px',
        "&:hover": {
            cursor: 'pointer'
        }

    },
    cardContent: {
        display: "block",


    },
    img: {
        height: '180px',
        width: '180px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    price: {
        fontWeight: 'bold',
        

    },
    cross:{
        "&:hover":{
            backgroundColor: 'white'
        },
        "&:focus":{
            backgroundColor: 'white'
        },
        "&:active":{
            backgroundColor: 'white'
        },
    }
}));
function Item(props) {
    const [Open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const classes = useStyles()

    const title = props.title;
    const price = props.price;
    return (
        <div>
            <Card onClick={handleClickOpen} className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <CardMedia className={classes.img} image={pic} />
                    {/* <img src={pic} alt="" srcset=""/> */}
                </CardContent>
                <CardContent >
                    <Typography variant="h6">{props.title}</Typography>
                    <Typography fontWeight="fontWeightMedium" className={classes.price}>LKR {props.price}</Typography>
                </CardContent>

            </Card>
            <Dialog
                open={Open}
                onClose={handleClose}
                maxWidth='xl'
            >
                <CardContent  style={{fontWeight:'bold',display: 'flex', justifyContent:'flex-end', height:'10px'}} >
                <Button disableRipple className={classes.cross}  onClick={handleClose}><CancelRoundedIcon fontSize="large"/></Button>
                </CardContent>
                <ViewItem title={title} price={price} />
            </Dialog>
        </div>
    )
}

export default Item
