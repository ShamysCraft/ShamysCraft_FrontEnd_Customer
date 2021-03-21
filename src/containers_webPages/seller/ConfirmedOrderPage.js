import React, {useState} from "react";
import { Grid, Card, Paper, Container} from "@material-ui/core";

import OrderItem from "../../components/Order/OrderItem"
import {OrderData} from "../seller/orderData/OrderData"
const ConfirmedOrderPage = (props)=>{
    return(
        <Grid 
        container 
        direction="column"
        justify="center"
        alignItems="center" 
        spacing={1}> 
            
                {OrderData.map((val,key)=>{
                    return(
                        <OrderItem key={key} userName={val.userName} prodName={val.ProductName} qty={val.Quantity} price={val.Price} date={val.date}  status={val.Status} />
                    )
                })}
           
        </Grid>
    )
}

export default ConfirmedOrderPage;