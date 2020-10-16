import React from 'react'
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import SendIcon from  "@material-ui/icons/Send"
import Navbar from "./Navbar" 
import emailjs from 'emailjs-com'
const useStyles = makeStyles((theme)=>({
    form: {
        top: "40%",
        left: "40%",
        transform: "translate(-50%, -50%",
        position: "absolute",
    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato",
    }
}));
const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color:"tan"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldSet": {
                borderColor: "tan",
            },
            "&:hover fieldset": {
                 borderColor: "tan",
            },
            "&.Mui-focused fieldset": {
                borderColor: "tan",
            }
        }
    },
})(TextField);


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_mwfge8j', e.target, 'user_O41XgjdkdwPwi3mEwbY1G')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 
}

function test(){
    console.log("test")
}
const Contacts = () => {
    
    const classes = useStyles()

    return (
        <Box component="div" style={{ background: "#233", height: "100vh"}}>
           <Navbar/>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" style={{color: "tomato", textAlign: "center", textTransform: "uppercase"}}>Contact Me...</Typography>
                    <Typography variant="h5" style={{color: "tomato", textAlign: "center", textTransform: "uppercase"}}>At sarthakthakur0097@gmail.com</Typography>

                        {/* <InputField 
                        fullWidth={true} 
                        label="Name"
                        variant="outlined" 
                        inputProps={{style:{ color: "white"}}} 
                        margin="dense" 
                        size="medium"/>
                        <br/>
                        <InputField fullWidth={true} label="Email"variant="outlined"
                        inputProps={{style:{ color: "white"}}} 
                        margin="dense" 
                        size="medium"/>
                        <br/>
                        <InputField fullWidth={true} label="Company name"variant="outlined" inputProps={{style:{ color: "white"}}} 
                        margin="dense" 
                        size="medium"/>
                        <br/>
                        <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>
                            contact me
                        </Button> */}
                </Box>
            </Grid>
        </Box>
    );
};

export default Contacts
