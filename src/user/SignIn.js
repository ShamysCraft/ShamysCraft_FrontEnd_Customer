import React, { useState } from 'react'
import { Link, Redirect } from "react-router-dom"
import { signin, authenticate, isAuthenticated } from "../auth/helper/index"

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
import {ErrorOutline } from "@material-ui/icons"

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
    alertError:{
        padding: '7px',
        backgroundColor:'#d62828',
        color:'white',
        borderRadius: '3px',
        width: 'auto',
        display: 'flex',
        
    }
}));

function SignIn() {
    const root = useStyle();
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        didRedirect: false
    });

    // destructuring values
    const { email, password, error, loading, didRedirect } = values;
    const { user } = isAuthenticated();

    // handle change
    const onHandleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    // button click -> onSubmit
    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false });
                } else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            didRedirect: true
                        })
                    })
                }
            })
            .catch(console.log("sign in request failed"))
    }

    const performRedirect = () => {
        // todo
        if (didRedirect) {
            if (user && user.role === 0) {
                return <Redirect to='/'/>
            } 
        }
        if (isAuthenticated() && user.role === 0) {
            return <Redirect to="/" />;
        }
        if (isAuthenticated() && user.role === 45) {
            return <Redirect to="/" />;
        }
        
    };

    const loadingMessage = () => {
        return (
            loading && (
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        );
    };


    const errorMessage = () =>{
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
                        Sign In
                    </Typography>
                    <form className={root.form} >
                        
                        {errorMessage()}
                        {loadingMessage()}
                        {performRedirect()}
                    
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
                            value={email}
                            onChange={onHandleChange("email")}
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
                            value={password}
                            onChange={onHandleChange("password")}

                        />

                        {/* <FormControlLabel/> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ backgroundColor: COLOURS.btnColor }}
                            className={root.submit}
                            onClick={onSubmit}
                        >Sign In</Button>
                        <Grid item>
                            <Link to='/signup' >
                                {"Don't have an Account? Sign Up"}
                            </Link>
                        </Grid>
                        <Typography>{JSON.stringify(values)}</Typography>
                        
                    </form>
                </div>
            </Container>

        </div>
    )
}

export default SignIn
