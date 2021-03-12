import React, {useState} from "react";
import pic from "./pot.jpg"
import {COLOURS } from "../../theme/colors"
import {useFormik} from "formik";
import {
    Container,
    Typography,
    Paper,
    CardMedia,
    Button,
    Card,
    ButtonGroup,
    CardActionArea,
    CardContent

    
} from "@material-ui/core"
//receive data from clicked item as props
const ViewItemPage = (props)=>{
    const [count,setCount] = useState(0)
    const price = 10;
    const formik = useFormik({})
    return(
        <div>
            
            <Container style={{margin:'20px'}}  fixed>
                <Card  style={{display:'flex', height:'500px'} }>
                <CardMedia image="./pot.jpg"/>
                <img src={pic} alt="" srcset=""/>
                <CardContent>
                    <Typography variant="h4">Clay Pot</Typography>
                    <Typography variant="h5">Price {price}</Typography>
                    <Typography variant="h6">Handmade clay pots for cooking, gas burner allowed</Typography>
                    <Typography variant="h6">Category : Pottery</Typography>
                    <Typography variant="h6">Dimention : 5*2*5</Typography>
                </CardContent>
                <CardContent>
                    
                    <Typography variant="h4">LKR {price*count}</Typography>
                    <ButtonGroup disableRipple variant="contained" style={{marginTop:'40px', marginBottom:'10px'}}  aria-label="contained primary button group">
                        <Button color="primary" onClick={()=> count<1 ? "" : setCount(count-1)} >-</Button>
                        <Button>{count}</Button>
                        <Button color="primary"onClick={()=>count>9 ? "" : setCount(count+1)}>+</Button>
                    </ButtonGroup>
                    <Button style={{backgroundColor:COLOURS.btnColor, justifyContent:'center', width:'121px'}}>Add To Cart</Button>
                    
                </CardContent>
                
                </Card>
            </Container>


        </div>
    )
}

export default ViewItemPage;