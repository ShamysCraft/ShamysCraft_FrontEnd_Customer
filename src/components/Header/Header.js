import React, {useState} from "react"
import {Link} from "react-router-dom"
import {COLOURS} from "../../theme/colors"


//import material ui design 
import SearchIcon from '@material-ui/icons/Search';
import CartIcon from '@material-ui/icons/ShoppingCart';
import ProfileIcon from '@material-ui/icons/AccountCircle'
import HelpIcon from '@material-ui/icons/Help'
import HomeIcon from '@material-ui/icons/Home'

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import {
    AppBar,
    Tab,
    Tabs,
    Typography,
    Toolbar,
    InputBase ,
    Button,
    Menu
    
} from '@material-ui/core'



const Header = (props)=>{
    const [value, setValue] = useState(0);
    const handleClickTab =(e, newValue) => {
        setValue(newValue)
    }
    const [anchrorEl, setAnchorEl] = useState(null)
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose1 = ()=>{
        setAnchorEl(null);
    }
    const [open, setOpen] = useState();
    const anchorRef = React.useRef(null);

    const handleToggle = () =>{
        setOpen((prevOpen) => !prevOpen)
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
      };

    // const onChange =(e,value) => {
    //     setValue(value);
    // }
    return(
        <AppBar position="sticky">
        <Toolbar className="Header"  style={{backgroundColor: COLOURS.darkBlue }}>
            <Typography className="Logo" variant="h5" noWrap>ShamysCraft.com</Typography>
            <div className="Search" variant="contained">
                <InputBase 
                    className="inputSearch"
                    style={{color : COLOURS.darkBlue}}
                    placeholder="Search.."
                    
                />
                <Button disableRipple  ><SearchIcon style={{color : COLOURS.darkBlue}}/></Button>
            </div>
            
            <Tabs
                onChange={handleClickTab }
                indicatorColor="primary"
                value={value}
                >
                <Tab disableRipple component={Link} to ='/' label="Home" icon={<HomeIcon/>} > </Tab>
                <Tab disableRipple component={Link} to ='/becomeSeller' label="Become a Seller" > </Tab>
                <Tab disableRipple icon={<ProfileIcon className="icons"/>} label="Profile" onClick={handleClick}> </Tab>
                <Tab disableRipple component={Link} to ='/help' icon={<HelpIcon className="icons"/>} label="Help"> </Tab>
                <Tab disableRipple component={Link} to ='/cart' icon={<CartIcon className="icons"/>} label="Cart"> </Tab>
            </Tabs>
            <div className="minion">
            <Menu variant="popover"
                id = "dropDown"
                anchorEl={anchrorEl}
                keepMounted
                open={Boolean(anchrorEl)}
                onClose={handleClose1}
                style={{top:'50px',left: '25px'}}
                >
                <MenuItem onClick={handleClose1}>Profile</MenuItem>
                <MenuItem onClick={handleClose1}>My account</MenuItem>
                <MenuItem onClick={handleClose1} component={Link} to ='/signin'>Sign In</MenuItem>
            </Menu>
            </div>
            {/* <Button disableRipple endIcon = {<ProfileIcon className="icons"/>} component={Link} to ='/account' variant="contained" color="primary">Go to Account </Button> */}
        </Toolbar>
    </AppBar>
    )
}

export default Header;