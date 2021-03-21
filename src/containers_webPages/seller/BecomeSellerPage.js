import React, {useState} from "react";
import {Link} from "react-router-dom"

import {
    Typography,
    Card,
    CardContent,
    Button,
    ButtonGroup,
    Grid
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

const useStyle = makeStyles((theme)=>({
    content: {
        padding:'30px',
        margin: '30px'
    },
    text:{
        margin:'20px'
    }
}));

const BecomeSellerPage = (props)=>{
    const classes = useStyle();

    return(
        <div>
            
            <Typography variant="h2">
                Become a Seller
            </Typography>
            <Grid
            container 
            direction="column"
            justify="center"
            alignItems="center" 
            spacing={1}
            >
            <Card className={classes.content}>
                <Typography className={classes.text}>
                    Sell at ShamysCraft. You can agree to become a seller and create a shop.
                    Add details of the item and display it for buyers.
                </Typography>
                <Typography className={classes.text}>
                    Do you agree to terms and conditions?
                </Typography>
                <ButtonGroup>
                    <Button color='secondary' variant="contained" component={Link} to="/">Cancel</Button>
                    <Button color='primary' variant="contained" component={Link} to="/createShop">Agree to become a Seller</Button>
                </ButtonGroup>
            </Card>
            </Grid>
        </div>
    )
}

export default BecomeSellerPage;