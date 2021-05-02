import React, { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom"
import { signup } from "../auth/helper/index"
import {
    Button,
    CssBaseline,
    TextField,
    Grid,
    Container,
    Typography,
} from '@material-ui/core'
import Avatar from "@material-ui/core/Avatar"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import { makeStyles } from "@material-ui/core/styles"
import { COLOURS } from "../theme/colors"
import {ErrorOutline, CheckCircleOutline} from "@material-ui/icons"

const useStyle = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: COLOURS.darkBlue,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    name: {
        marginRight: theme.spacing(2)
    },
    alertSuccess:{
        
        padding: '7px',
        borderRadius: '3px',
        color: 'white',
        backgroundColor: 'green',
        width: 'auto',
        display: 'flex',
    },
    alertError:{
        padding: '7px',
        backgroundColor:'#d62828',
        color:'white',
        borderRadius: '3px',
        width: 'auto',
        display: 'flex',
        
    }
}));

const SignUpPage = (props) => {
    const root = useStyle();
    const history = useHistory();
    const [Values, setValues] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        error: "",
        success: false
    })

    const { fname, lname, email, password, error, success } = Values;
    //higher order function
    const handleChange = (name) => (event) => {
        setValues({ ...Values, error: false, [name]: event.target.value })
    }

    //button - onSubmit
    const onSubmit = event => {
        event.preventDefault()
        setValues({ ...Values, error: false })
        signup({ fname, lname, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...Values, error: data.error, success: false })
                }
                else {
                    setValues({
                        ...Values,
                        fname: "",
                        lname: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true
                    })
                    // sign in success -> login page
                    setTimeout(()=>{

                        history.push('/signin')
                    },2000)
                }
            })
            .catch(console.log("Error @ sign up"))
    }

    //success message
    const SuccessMessage = () => {
        return (
            <div
            className={root.alertSuccess}
                style={{ display: success ? "" : "none" }}
            >
                <CheckCircleOutline/>
                <Typography style={{marginLeft: '10px'}} >
                New account created successfully!
                </Typography>
                
            </div>
        )
    }

    // error msg
    const ErrorMessage = () => {

        return (
            <div
            className={root.alertError}
                style={{ display: error ? "" : "none" }}
            >
                <ErrorOutline/>
                <Typography style={{marginLeft: '10px', width: 'auto'} } >{error}</Typography>
            </div>
        )
    }
    return (

        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={root.paper}>
                    <Avatar className={root.avatar}><LockOutlinedIcon /></Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <form className={root.form} >
                        {SuccessMessage()}
                        {ErrorMessage()}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            className={root.name}
                            id="FirstName"
                            label="First Name"
                            name="fname"
                            autoComplete="FirstName"
                            autoFocus
                            fullWidth
                            value={fname}
                            onChange={handleChange("fname")}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="LastName"
                            label="Last Name"
                            name="lname"
                            autoComplete="LastName"
                            autoFocus
                            onChange={handleChange("lname")}
                            value={lname}
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleChange("email")}
                            value={email}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            onChange={handleChange("password")}
                            value={password}
                            
                        />
                        {/* <TextField
                            variant="outlined"
                            margin="normal"
                            required ="true"
                            fullWidth
                            id="confirmpassword"
                            label="Confirm Password"
                            type="password"
                            name="confirmpassword"
                            autoComplete="current-password"
                            onChange={handleChange("password")}

                        /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ backgroundColor: COLOURS.btnColor }}
                            className={root.submit}
                            onClick={onSubmit}
                        >Sign Up</Button>
                        <Grid item>

                            <Link to='/signin' >
                                {"Have an Account? Sign in"}
                            </Link>
                        </Grid>
                    </form>

                    <Typography variant="h6">{JSON.stringify(Values)}</Typography>
                </div>
            </Container>
        </div>
    )
}

export default SignUpPage;