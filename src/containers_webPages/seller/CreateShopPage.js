import React, {useState} from "react";
import {
    Typography,
    Card,
    CardContent,
    Button,
    ButtonGroup,
    TextField,
    Grid
} from "@material-ui/core"
import {COLOURS} from "../../theme/colors"
import {makeStyles} from "@material-ui/core/styles"

const useStyle = makeStyles((theme)=>({
    container:{
        margin: '50px'
    },
    content: {
        padding:'30px',
        margin: '30px'
    },
    row:{
        width: '500px'
    },
    text:{
        margin:'20px'
    },
    nameinput:{
        
        width: '500px',
        textAlign: 'center'
    },
    inputdesc:{
        
        
        width: '500px'
    },
    buttongrp:{
        margin:'15px',
        width: '500px',
        justifyContent: 'center'
    }
}));
const CreateShopPage = (props)=>{
    const classes = useStyle();

    return(
        <div >
            
            <Grid
                container 
                direction="column"
                justify="center"
                alignItems="center" 
                spacing={1}
            >
                <Card className={classes.container}>
                    <CardContent className={classes.row}>
                        <Typography variant="h2">
                            Create Shop 
                        </Typography>
                    </CardContent>
                    <CardContent className={classes.row}>
                        <TextField className={classes.nameinput}
                            
                            variant="outlined"
                            label="Enter Shop Name"
                            
                        />
                    </CardContent>
                    <CardContent className={classes.row}>
                        <Typography>Describe the Shop</Typography>
                        <TextField className={classes.inputdesc}
                            id="outlined-multiline-static"
                            
                            multiline
                            rows={6}
                            placeholder="Write Here"
                            variant="outlined"
                        />
                    </CardContent>
                    <ButtonGroup fullWidth className={classes.buttongrp}>
                    <Button variant="contained" color="secondary" >Cancel</Button>
                    <Button variant="contained" color="primary" >Create Shop</Button>
                    </ButtonGroup>
                </Card>
            </Grid>
        </div>
    )
}

export default CreateShopPage;