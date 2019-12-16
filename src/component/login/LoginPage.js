import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import { Grid, InputAdornment } from '@material-ui/core';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import TextField from '@material-ui/core/TextField';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PasswordShowHide from '../PasswordField';



const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
      
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
      <Button color="green" onClick={handleOpen}>
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
            <Grid container direction="row" justify="space-around" alignItems="flex-start" spacing={0} margin="50">
              <Grid item >
              <img alt="" src="/logo1.png" width="214" height="550" role="presentation"/>
              </Grid>
              
                <Grid item align="center" style={{marginInlineEnd:28.19}} >
                 <h2 id="transition-modal-title">Sign in with email</h2>
                    <p style={{maxWidth:"27vw", color:"grey"}} id="transition-modal-description">Enter the email address associated with your account, and we'll send a magic link to your inbox.</p>
                <Grid align="center" style={{marginTop:"40px"}}>
                   <Grid item >
                    <TextField style={{width:280, marginLeft:24}} inputProps={{style:{ textAlign:"center"}}} id="input-with-icon-grid" label="email" InputProps={{endAdornment:(<InputAdornment><InfoOutlinedIcon/></InputAdornment>)}}/>
                  </Grid>

                  <PasswordShowHide/>
                </Grid>
                    
                    <Button style={{marginTop:"100px", color:"white", backgroundColor:"black" }} >Continue</Button>

                    <p><Button style={{color:"green", marginTop:"10px"}} onClick={handleClose} ><ArrowBackIosOutlinedIcon/>All sign in option</Button></p>

                </Grid>

                <Grid item >
                    <img alt="" src="/logoright.png" width="214" height="550"/>
                </Grid>
            </Grid>
         
          </div>
        </Fade>
      </Modal>
    </div>
  );
}