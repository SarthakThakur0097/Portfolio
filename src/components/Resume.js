import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box, Avatar} from "@material-ui/core";
import Navbar from "./Navbar";
import Particles from "react-particles-js"
import appAcademy from "../images/appAcademy-removebg-preview.png"
import pseg from "../images/pseglogo-removebg-preview.png"

const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: ""
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top:0
        },
        "&:after":{
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right:"auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        marigin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparennt tomato tomato"
            }
        }
    },
    avatar: {
        // display: "block",
        // margin: "0.5rem auto",
        // width: theme.spacing(13),
        // height: theme.spacing(13)
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
   
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        },
    },
        heading: {
            color: "tomato",
            padding: "3rem 0",
            textTransform: "uppercase"
        },
        subHeading: {
            color: "white",
            padding: "0",
            textTransform: "uppercase"
        }
}));
const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar/>
            <Box component="header" className={classes.mainContainer}>

                <Typography className={classes.heading} variant="h4" align="center">
                    working experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Avatar src={appAcademy} alt="Sarthak Thakur" style={{ justifyContent: "center", display: "flex" }} />   
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Full-Stack .NET Web Development
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "tomato"}}>
                            app Academy
                        </Typography>
                        <Typography variant="subtitle" align="center" style={{color: "tan"}}>
                        -Attended an intensive full-stack web development bootcamp.
                        <br/>
                        -Designed and developed various applications using technologies ranging from ASP.NET WebForms, ASP.NET MVC, C#, Javascript, Sql Server.
                        <br/>
                        -Collaborated with other students on various projects using git
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                    <Avatar src={pseg} alt="Sarthak Thakur" style={{ justifyContent: "center", display: "flex" }} />   
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            IT Professional - DevOps Engineer
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "tomato"}}>
                            PSEG Li
                        </Typography>
                        <Typography variant="subtitle" align="center" style={{color: "tan"}}>
                        -Decreased time required to report live outages on android and ios app by 500% using Java and Kotlin 
                        <br/>
                        -Improved user experience by fixing various bugs and crashes within the app 
                        <br/>
                        -Worked in a team delivering many user stories
                        </Typography>
                    </Box>
                    {/* Next Experience Date */}
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        Current
                    </Typography>
                    {/* <Box component="div" className={classes.timeLineItem}>
                        <Avatar src={appAcademy} alt="Sarthak Thakur" style={{ justifyContent: "center", display: "flex" }} />   
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Full-Stack .NET Web Development
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "tomato"}}>
                            app Academy
                        </Typography>
                        <Typography variant="subtitle" align="center" style={{color: "tan"}}>
                        -Attended an intensive full-stack web development bootcamp.
                        </Typography>
                        <br/>
                        <Typography variant="subtitle" align="center" style={{color: "tan"}}>
                        -Designed and developed various applications using technologies ranging from ASP.NET WebForms, ASP.NET Mvc, C#, Javascript, Sql Server.
                        </Typography>
                        <br/>
                        <Typography variant="subtitle" align="center" style={{color: "tan"}}>
                        -Collaborated with other students on various projects using git
                        </Typography>
                    </Box> */}
                    <Particles
                        canvasClassName={classes.particlesCanva}
                            param={{
                            particles:{
                                number:{
                                    value:150,
                                    density: {
                                        enable: true,
                                        value_area:150
                                    }
                                },
                                shape: {
                                    type: "circle",
                                    stroke: {
                                        width: 30,
                                        color: 'tomato'
                                    }
                                },
                                size: {
                                    value: 15, 
                                    random: true,
                                    anim: {
                                        enable: false,
                                        speed:8,
                                        size_min: 0.1,
                                        sync: true
                                    }
                                },
                                opacity: {
                                    value: 1,
                                    random: true,
                                    anim: {
                                        enable: true,
                                        speed: 1,
                                        opacity_min: 0.1,
                                        sync: true
                                    }
                                }
                            }
                        }}
                    />
                </Box>
            </Box>
        </>
    )
}

export default Resume
