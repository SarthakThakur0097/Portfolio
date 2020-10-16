import React, {useState} from 'react'
import App from '../App';
import MobileRightMenuSlider from "@material-ui/core/Drawer"
import {Link} from "react-router-dom";
import Footer from "./Footer";
import {
AppBar,
Toolbar,
ListItem,
IconButton,
ListItemText,
ListItemIcon,
Avatar,
Divider,
List,
Typography,
Box,
makeStyles
} from "@material-ui/core";

import {
ArrowBack,
Menu,
AssignmentInd,
Home,
Apps,
ContactMail
} from "@material-ui/icons"
import avatar from "../images/Sarthak_Shakur.png"

//CSS STYLES
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    ListItem: {
        color:"tan"
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts",
        listPath: "/contacts"
    },
]
const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open });
    };
    const classes = useStyles();

    const slideList = slider => (
        <Box 
        className={classes.menuSliderContainer}
        component="div"
        onClick={toggleSlider(slider, false)}
        >

        <Avatar className={classes.Avatar} src={avatar} alt="Sarthak Thakur"/>   
        <Divider/>
        <List>
            {menuItems.map((lsItem, key)=>(
            <ListItem button key={key} component={Link} to={lsItem.listPath}>
                <ListItemIcon className={classes.ListItem}>{lsItem.listIcon}</ListItemIcon>
                <ListItemText className={classes.ListItem} primary={lsItem.listText}/>
            </ListItem>
            ))}
        </List> 
        </Box>
    )
    return (
        <>

            <Box component="nav">
                <AppBar position="static" style={{background: "#222"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <Menu style={{color: "tomato"}}/>
                        </IconButton>
                        <Typography variant="h5" style={{color: "tan"}}></Typography>
                        <MobileRightMenuSlider 
                        anchor="right" 
                        open={state.right}
                        onClose={toggleSlider("right", false)}
                        >
                            {slideList("right")}
                            <Footer/>
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
