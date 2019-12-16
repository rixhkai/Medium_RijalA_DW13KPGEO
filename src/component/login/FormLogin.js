import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PasswordShowHide from '../PasswordField';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputWithIcon() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.margin}>
        <Grid align="center">

          <Grid item >
            <TextField style={{width:280}} inputProps={{style:{ textAlign:"center"}}} id="input-with-icon-grid" label="username"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <InfoOutlinedIcon/>
                </InputAdornment> ),}} />
          </Grid>
        </Grid>
      </div>

      <div className={classes.margin}>
        <Grid align="center">

          <PasswordShowHide/>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid align="center">

          <Grid item>
            <TextField style={{width:280}} 
                        inputProps={{style:{ textAlign:"center"}}} 
                        id="input-with-icon-grid" 
                        label="email" 
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <InfoOutlinedIcon/>
                            </InputAdornment> ),}}/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}