import React from 'react'
// import {Link} from "react-router-dom"
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid
} from "@material-ui/core"
function ItemCard(props) {


    return (
        <Card className="record" style={{ width: "300px" }} >
            <ul >
                <div className="item" >
                    <li  style={{ listStyle: "none" }}>
                        <CardContent >
                            <CardMedia image='src\assets\pot.jpg' />
                            <Typography variant="h5" noWrap>
                                {props.title}
                            </Typography>
                            <Typography>
                                LKR {props.price}
                            </Typography>
                            <Typography>
                                {props.stock}
                            </Typography>
                        </CardContent>

                    </li>
                </div>
            </ul>
        </Card>

    )
}

export default ItemCard
