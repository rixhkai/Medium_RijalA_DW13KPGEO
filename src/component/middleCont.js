import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: "680px",
    backgroundColor: theme.palette.background.paper,
    paddingRight: "24px",
  },
  inline: {
    display: 'inline',
  },

  normalSize:{
      width: "152px",
      height:"128px",
  },
}));

export const AlignItemsList = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        
        <ListItemText
          primary={props.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textSecondary"
              >
                {props.desc}<br/><br/>{props.author}<br/>
              </Typography>
              {props.date}
            </React.Fragment>
          }
        />
        <ListItemAvatar>
          <Avatar className={classes.normalSize} variant="square" alt="Remy Sharp" src={props.img}/>
        </ListItemAvatar>
      </ListItem>
      <Divider style={{marginTop:"10px"}} variant="fullWidth" component="li" />
  </List>





  );
}