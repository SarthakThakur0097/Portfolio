import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Avatar
} from "@material-ui/core";
import Navbar from './Navbar';
import project1 from "../images/Dotnetmvc5-PixTeller.png";
import project2 from "../images/javascript-fullstack.jpg";
import project3 from "../images/react-redux.jpg";
import project4 from "../images/mern-stack.jpg";
import Slideshow from "./Slideshow/SlideShow"
const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%",
        
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto"
    },
    slideShowContainer: {
        marginRight: '20px'
    }
});

const Portfolio = () => {
    const classes = useStyles()
    return (
        <>
            <Box justify="center">
                <Navbar/>
                <Grid container justify="center" >
                {/* Project 1*/}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Bryant University"
                            height="140"
                            image={project1}   
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Gwent
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                    lorem30 
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live demo test
                                </Button>
                            </CardActions>
                    </Card>
                    </Grid>
                    {/* Project 2*/}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Project 2"
                                height="140"
                                image={project1}   
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Bryant University
                                    </Typography>
                                    <Typography  variant="body2" color="textSecondary" component="p">
                                        lorem30 
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Live demo
                                    </Button>
                                </CardActions>
                        </Card>
                    </Grid>
                     {/* Project 3*/}
                     <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Project 3"
                                height="140"
                                image={project3}   
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Project 3 
                                    </Typography>
                                    <Typography  variant="body2" color="textSecondary" component="p">
                                        lorem30 
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Live demo
                                    </Button>
                                </CardActions>
                        </Card>
                    </Grid>
                     {/* Project 4*/}
                     <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Project 4"
                                height="140"
                                image={project4}   
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Project 4 
                                    </Typography>
                                    <Typography  variant="body2" color="textSecondary" component="p">
                                        lorem30 
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Live demo
                                    </Button>
                                </CardActions>
                            
                        </Card>
                    </Grid>
                </Grid>
                {/* <Box
                     style={{margin:'1000'}}
                >
                    <Slideshow
                        className={classes.slideShowContainer}
                        align="center"
                        interval={3000}
                        images={[
                            project1,
                            project2,
                            project3,
                            project4,
                            project4,
                            project4
                        ]}
                    />
                </Box> */}
            </Box>
        </>
    );
};

export default Portfolio
