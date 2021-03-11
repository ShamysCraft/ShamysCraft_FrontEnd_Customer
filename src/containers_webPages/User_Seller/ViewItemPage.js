import React, {useState} from "react";
import {
    Container,
    Typography,
    Paper,
    CardMedia,
    Button,
    Card
    
} from "@material-ui/core"
//receive data from clicked item as props
const ViewItemPage = (props)=>{
    
    return(
        <div>
            <h1>hi</h1>
            <Container fixed>
                <Card>
                <CardMedia/>
                <Typography variant="h4">Title</Typography>
                <Typography variant="h5">Price</Typography>
                <Typography variant="h6">Description</Typography>
                <Typography variant="h6">Total</Typography>
                <Button>Add to Cart</Button>
                </Card>
            </Container>


        </div>
    )
}

export default ViewItemPage;