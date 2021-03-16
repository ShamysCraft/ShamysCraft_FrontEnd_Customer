//receiveOrder
//confirm pending order state
import React from 'react'
import {
    Card,
    CardContent,
    Typography,
    CardMedia,
    Grid,
    Button,
    ButtonGroup

} from "@material-ui/core"
import {} from "@material-ui/icons"
import {makeStyles} from "@material-ui/core/styles"

const useStyle = makeStyles((theme)=>({
    block :{
        marginTop: '20px'
    },
    row:{
        display:'flex',
        width: '700px',
        margin: '5px',
        
    },
    row1:{
        width:'30p%'
    },
    row2:{
        width:'40%'
    },
    row3:{
        width:'30%'
    },
    
}))
const OrderItem = (props)=> {
    const classes = useStyle();
    
    
        // if(props.status === "Pending"){
        //     return props
        // }
    
    
        
    return (
        <div className={classes.block}>
            <Card className={classes.row} >
                
                <CardContent className={classes.row1}>
                    <Typography>{"User Name "+props.userName}</Typography>
                </CardContent>
                <CardContent className={classes.row2}>
                    <Typography>{`Name: ${props.prodName}`}</Typography>
                    <Typography>{`Quantity: ${props.qty}`}</Typography>
                    <Typography>{`Price(LKR): ${props.price}`}</Typography>
                    <Typography>{`Total Cost(LKR): ${props.price*props.qty}`}</Typography>
                </CardContent>
                <CardContent className={classes.row3}>
                    <Typography>{` ${props.date}`}</Typography>
                    
                    <Typography>{`State: ${props.status}`}</Typography>
                    <ButtonGroup variant="contained">
                        <Button color="primary">Accept</Button>
                        <Button color="secondary">Decline</Button>
                    </ButtonGroup>
                </CardContent>
            </Card>
        </div>
    )
}

export default OrderItem
