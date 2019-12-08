import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import FormControl from '@material-ui/core/FormControl';
import { Grid } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
      width: 900,
      height: 550,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 3),
    
  },
  margin: {
      marginTop:30,
  }
}));

export default function SignInModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleOpen}>
          SIGN IN
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
          
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
              <Grid item >
              <img alt="" src="/logo1.png" width="214" height="600" role="presentation"/>
              </Grid>
              
                <Grid item align="center" style={{marginLeft:29.1, marginInlineEnd:28.19}} >
                 <h2 id="transition-modal-title">Login Medium</h2>
                    <p style={{maxWidth:"27vw", color:"grey"}} id="transition-modal-description">Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</p>
                
                    <TextField style={{width:280}} inputProps={{style:{ textAlign:"center"}}} id="input-with-icon-grid" label="email" />
                    <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
        <Input
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment position="start">
              <InfoIcon />
            </InputAdornment>
          }
        />
      </FormControl>
                    
                    <Button style={{marginTop:"10px", color:"white", backgroundColor:"black" }} >Registration</Button>

                    <p >Already have an account? <Button style={{color:"green"}} >Sign in</Button></p>

                    <p style={{fontSize:"2dp", maxWidth:"27vw", color:"grey"}}>To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium’s Terms of Service & Privacy Policy.</p>
                </Grid>

                <Grid item >
                    <img alt="" src="/logoright.png" style={{width:214, height:"600"}}/>
                </Grid>
            </Grid>
         
          </div>
        </Fade>
      </Modal>
    </div>
  );
}