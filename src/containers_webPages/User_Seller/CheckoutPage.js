
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles"
import {COLOURS} from "../../theme/colors"
import {
    Card,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid,
    ButtonGroup
} from "@material-ui/core"


const useStyles = makeStyles((theme)=>({
    block :{
        marginTop: '20px',
        textAlign: 'center'
    },
    container :{
        display:'flex',
        justifyContent: 'center',
        width: '600px',
       
    },
    prodContent:{
        margin: '5px',
        textAlign: 'center'
        
    },
    
    row:{
        textAlign:'center',
        display: 'flex',
        justifyContent: 'center',
        
    },
    
    btn:{
        backgroundColor : COLOURS.btnColor,
        
    },
    heading:{
        fontWeight : 'bold'
    }
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
            <Card className={classes.container}>
            <CardContent className={classes.img}>
                {/* image goes here */}
                <Typography>Product Name</Typography>
            </CardContent>
            <CardContent className={classes.prodContent}>

                <CardContent className={classes.row}>
                    <CardContent>
                        <Typography className={classes.heading}>Unit Price</Typography>
                        <Typography>LKR 80</Typography>
                   </CardContent>
                   <CardContent>
                        <Typography className={classes.heading}>Quantity</Typography>
                        <ButtonGroup>
                            <Button>-</Button>
                            <Button>count</Button>
                            <Button>+</Button>
                        </ButtonGroup>
                   </CardContent>
                   <CardContent>
                        <Typography className={classes.heading}>Total Price</Typography>
                        <Typography>LKR 240</Typography>
                   </CardContent>
               </CardContent>
               <CardContent>
                   <Typography className={classes.heading}> Select your delivery option </Typography>
                    <select name="" id="">
                        <option value="">-Select-</option>
                        <option value="">Cash On Delivery</option>
                    </select>
                </CardContent>
               <CardContent>
                    <Button variant="contained" fullWidth color="primary">Check Out</Button>
                </CardContent>
                
               {/* row 2 */}
               
                
            </CardContent>
            
               
                   
               
            </Card>
            </div>
        </Grid>
        </div>
    )
}

export default CheckOut;