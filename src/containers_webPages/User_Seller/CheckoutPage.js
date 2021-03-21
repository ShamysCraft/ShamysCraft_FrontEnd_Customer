
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles"
import {COLOURS} from "../../theme/colors"
import {
    Card,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid
} from "@material-ui/core"


const useStyles = makeStyles((theme)=>({
    block :{
        marginTop: '20px'
    },
    row:{
        display:'flex',
        width: '600px',
        margin: '5px',
        
    },
    row1:{
        width:'250px'
    },
    row2:{
        width:'200px'
    },
    row3:{
        width:'100px'
    },
    btn:{
        backgroundColor : COLOURS.btnColor,
        
    },
    
}));
const CheckOut = (props)=>{
    const classes = useStyles();
    return(
        <div>
            <h1>Im in checkout page</h1>
            <Grid 
        container 
        direction="column"
        justify="center"
        alignItems="center" 
        spacing={1}
        > 
            {/* order Struct come here */}
            <div className={classes.block}>
            <Card className={classes.row}>
            <CardContent className={classes.row1}>
                   {/* image goes here */}
                   <Typography>Product Name</Typography>
                   <Typography>Product Price</Typography>
               </CardContent>
               <CardContent className={classes.row2}>
                   <Typography>Quantity</Typography>
                   <Typography>Price * Qty</Typography>
                   <Typography>Delivery Method</Typography>
                   <Typography>Availability</Typography>
               </CardContent>
               <CardContent className={classes.row3}>
                   <Typography>Total Price</Typography>
                   <Button className={classes.btn}>Check Out</Button>
               </CardContent>
            </Card>
            </div>
        </Grid>
        </div>
    )
}

export default CheckOut;