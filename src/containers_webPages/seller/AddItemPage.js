import React, {useState} from "react";

import {
    
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Grid,
    MenuItem,
    TextField,
    Typography,
    Container,
    CssBaseline,
    FormLabel,
    Button,
    ButtonGroup
} from "@material-ui/core"

import {makeStyles} from "@material-ui/core/styles"
import {} from "@material-ui/icons"

const categories = [
    {
        title : 'pottery'
    },
    {
        title : 'Wood Art'
    },
    {
        title : 'Paper Craft'
    },
    {
        title : 'Wool'
    }
]

const useStyles = makeStyles((theme)=>({
    qtybtn:{
        padding:'5px',
        border: '2px'
        
    },
    submit:{
        marginTop: '10px'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(5),
      }
}));

const AddItemPage = (props)=>{
    const classes = useStyles();
    const [count,setCount] = useState(0)
    const [file,setFile] =  useState("")
    const [text, setText] = useState("")
    const [price, setprice] = useState(0)
    function handleChange(e){
        let url = URL.createObjectURL(e.target.files[0])
        setFile(url)
    }

    return(
        <div>
            <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <form className={classes.form} noValidate>
                <Typography variant="h3">Add Item</Typography>
                {/* <FormLabel>Name</FormLabel> */}
                <TextField
                    variant="standard"
                    margin="normal"
                    required
                    id="title"
                    label="Item Name"
                    name="title"
                    fullWidth
                    onChange={event => setText(event.target.value)}
                />
                <TextField
                    variant="standard"
                    margin="normal"
                    required
                    id="Category"
                    select
                    label="Category"
                    
                    name="Category"
                    fullWidth
                    onChange={event => setText(event.target.value)}
                >
                    {categories.map((option)=>(
                        <MenuItem key={option.title} value={option.title}>
                                {option.title}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    variant="standard"
                    margin="normal"
                    required
                    id="Price"
                    value="LKR"
                    label="Price Per Item"
                    name="Price"
                    autoComplete="Price"
                    autoFocus
                    type="number"
                    InputProps={{inputProps:{min:0}}}
                    onChange={event => setText(event.target.value)}
                    
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    multiline
                    rows={2}
                    id="Description"
                    label="Description"
                    name="Description"
                    placeholder=""
                    autoComplete="Description"
                    autoFocus
                    fullWidth
                    onChange={event => setText(event.target.value)}

                />
                <TextField
                    id="outlined"
                    label="Image Upload"
                    name="upload-photo"
                    type="file"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={handleChange}
                />
                
                <div className={classes.qtybtn}>
                <FormLabel>Quantity : </FormLabel>
                <ButtonGroup disableRipple variant="contained"   >
                        <Button color="primary" onClick={()=> count<1 ? "" : setCount(count-1)} >-</Button>
                        <Button>{count}</Button>
                        <Button color="primary"onClick={()=>count>9 ? "" : setCount(count+1)}>+</Button>
                </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup className={classes.submit} fullWidth disableRipple variant="contained">
                        <Button color="primary">Add Item</Button>
                        <Button color="secondary">Cancel</Button>
                    </ButtonGroup>
                </div>
            </form>
            </Container>
        </div>
    )
}

export default AddItemPage;