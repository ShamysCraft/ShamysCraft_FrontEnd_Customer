import React, { useState, useEffect } from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid
} from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import { COLOURS } from "../theme/colors"
import { isAuthenticated } from "../auth/helper";
import { getOrders } from "../core/helper/orderHelper";




const OrderHistory = (props) => {
    const classes = useStyle();
    const [Orders, setOrders] = useState([])
    const [reload, setreload] = useState("")
    const [products, setproducts] = useState([])
    const { user, token } = isAuthenticated()

    // preload
    const preLoad = (userId, token) => {
        getOrders(userId, token)
            .then(data => {
                if (data.err) {
                    console.log("Error @ data fetching")
                }
                if (data.user === userId) {

                    setOrders(data)

                }
                else {
                    setOrders(data)
                }
            })
    }
    useEffect(() => {
        preLoad(user._id, token)
    }, [reload])

    return (
        <div>
            <Grid
                className={classes.block}
                container spacing={1}
                direction="column"
                justify="center"
                alignItems="center"
            >
                <div >
                    {Orders && Orders.map((order, index) => {
                        if(order.user._id === user._id){
                        return (
                            <Card key={index} className={classes.row}>
                                <CardContent className={classes.row1}>
                                    <Typography variant="h6" component="p">Product Name </Typography>
                                    <Typography>{order.products[0].prodname}</Typography>


                                </CardContent>
                                <CardContent className={classes.row2}>
                                    <Typography variant="h6" component="p">Product Price</Typography>
                                    <Typography>{order.products[0].price}</Typography>
                                    <Typography>Quantity 1</Typography>

                                </CardContent>
                                <CardContent className={classes.row3}>
                                    <Typography variant="h6" component="p">Total Price</Typography>
                                    <Typography>{order.products[0].price*1}</Typography>
                                </CardContent>
                            </Card>

                        )}
                    })}
                </div>

            </Grid>
        </div>
    )
}

export default OrderHistory;

const useStyle = makeStyles(() => ({
    block: {
        marginTop: '50px'
    },
    row: {
        display: 'flex',
        margin: '5px'

    },
    row1: {
        width: '250px'
    },
    row2: {
        width: '200px'
    },
    row3: {
        width: '100px'
    },
    btn: {
        backgroundColor: COLOURS.btnColor,

    }
}));