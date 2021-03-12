import React, { useState } from 'react'
import {ItemData} from "./ItemData"
import ItemCard from "../../components/Card/ItemCard"
import viewItem from "../../containers_webPages/User_Seller/ViewItemPage"
import {Link} from "react-router-dom"
// import logo from "src/assets/pot.jpg"
import {Grid} from "@material-ui/core"

function Item(props) {

    return (
        <div>
        <Grid container spacing={1}>
            <Grid
                container 
                direction="row"
                justify="center"
                alignItems="center">
            
            {ItemData.map((val,key)=>{
            return(
                <ItemCard  key={key} title={val.title} price={val.price}
                />
                )
            })}
            </Grid>
        </Grid>
        </div>
    )
}

export default Item
