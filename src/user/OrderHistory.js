import React, {useState} from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid
} from "@material-ui/core"

import {makeStyles} from "@material-ui/core/styles"
import {COLOURS} from "../theme/colors"


const useStyle = makeStyles(()=>({
    block :{
        marginTop: '100px'
    },
    row:{
        display:'flex',
       
        
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
        
    }
}));

const OrderHistory = (props)=>{
    const classes = useStyle();
    return(
        <div>
        <Grid 
        container spacing={1}
        direction="column"
            justify="center"
            alignItems="center" 
        > 
        
            
        
            
            <div >
            <Card className={classes.row}>
                <CardContent className={classes.row1}>
                    {/* image */}
                   <Typography>Product Name</Typography>
                   <Typography>Product Price</Typography>
               </CardContent>
               <CardContent className={classes.row2}>
                   <Typography>Quantity</Typography>
                   <Typography>Price * Qty</Typography>
                   <Typography>Delivery Method</Typography>
               </CardContent>
               <CardContent className={classes.row3}>
                   <Typography>Status</Typography>
                   <Typography>Total Price</Typography>
                   <Typography>240</Typography>
                 </CardContent>
            </Card>
            </div>
            
        </Grid>
        </div>
    )
}

export default OrderHistory;