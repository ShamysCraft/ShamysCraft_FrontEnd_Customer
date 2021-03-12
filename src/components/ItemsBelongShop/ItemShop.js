import React from 'react'
import {Grid} from "@material-ui/core"
import {ItemShopData} from "./ItemShopData"
import {makeStyles} from "@material-ui/core/styles"
import ItemCard from "../Card/ItemCard"
import {Card, CardContent, Button} from "@material-ui/core"

const useStyle = makeStyles({
    div:{
        margin:'2px'
    },
    card:{
        display:'flex'
    },
    btn:{
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: '5px'
    }

});

function ItemShop() {
const classes = useStyle();
    return (
        <div>
            
            <Grid container spacing={1}>
            <Grid
                container 
                direction="row"
                justify="center"
                alignItems="center">
            
            {ItemShopData.map((val,key)=>{
            return(
                <div className={classes.div}>
                    <Card className={classes.card}>
                    <ItemCard  key={key} title={val.title} price={val.price} stock={'stock :'+ val.stock}/>
                    <div className={classes.btn}>
                    <Button style={{marginBottom:'10px'}} variant="contained" color="primary" disableRipple>Edit</Button>
                    <Button variant="contained" color="secondary" disableRipple>Delete</Button>
                    </div>
                    </Card>
                </div>
                )
            })}
            </Grid>
        </Grid>
        </div>
    )
}

export default ItemShop
