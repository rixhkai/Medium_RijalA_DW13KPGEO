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

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        
        <ListItemText
          primary="How to Remove Array Duplicates in ES6"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textSecondary"
              >
                Let’s look at the 3 ways in ES6 to filter out duplicates from a JS array and return only the unique values. Using Set, Filter, and Reduce.<br/><br/>Samantha Ming in DailyJS<br/>
              </Typography>
              {"Jan 14 • 4 min read"}
            </React.Fragment>
          }
        />
        <ListItemAvatar>
          <Avatar className={classes.normalSize} variant="square" alt="Remy Sharp" src="https://cdn-images-1.medium.com/focal/190/195/51/57/1*Z1SU1atGbGMgY_jHaDyMGA.png" />
        </ListItemAvatar>
      </ListItem>
      <Divider style={{marginTop:"10px"}} variant="fullWidth" component="li" />
      <ListItem alignItems="flex-start">
        
        <ListItemText
          primary="Reusing code between React Js and React Native effectively"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textSecondary"
              >
                  <br/><br/><br/>
                Harnoor Bandesh in codeburst<br/>
              </Typography>
              {"May 6 • 6 min read"}
            </React.Fragment>
          }
        />
        <ListItemAvatar>
          <Avatar className={classes.normalSize} variant="square" alt="Travis Howard" src="https://cdn-images-1.medium.com/fit/c/190/195/1*W21Yvoor2nIr3dnZ46tNYw.jpeg" />
        </ListItemAvatar>
      </ListItem>
      <Divider style={{marginTop:"10px"}} variant="fullwidth" component="li" />
      <ListItem alignItems="flex-start">
        
        <ListItemText
          primary="Is Kotlin Better Than Java for Android App Development?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textSecondary"
              >
                Comparing two different ways of writing Android apps<br/><br/><br/>Himanshu Verma in Better Programming<br/>
              </Typography>
              {'Nov 24 • 5 min read'}
            </React.Fragment>
          }
        />
        <ListItemAvatar>
          <Avatar className={classes.normalSize} variant="square" alt="Cindy Baker" src="https://cdn-images-1.medium.com/fit/c/190/195/1*73oXq1pNNQoEUd9pOq4jXA.jpeg" />
        </ListItemAvatar>
      </ListItem>
      <Divider style={{marginTop:"10px"}} variant="fullwidth" component="li" />
      <ListItem alignItems="flex-start">
        
        <ListItemText
          primary="How We Handled a Large-scale AndroidX Migration"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textSecondary"
              >
                Key takeaways from Gojek’s consumer app migration.<br/><br/><br/>Abhishek Birdawade in Gojek Product + Tech<br/>
              </Typography>
              {'Dec 6 • 6 min read'}
            </React.Fragment>
          }
        />
        <ListItemAvatar>
          <Avatar className={classes.normalSize} variant="square" alt="Cindy Baker" src="https://cdn-images-1.medium.com/focal/190/195/49/57/1*55rIj4xRqg5XcTWAhkwlJA.jpeg" />
        </ListItemAvatar>
      </ListItem>
    <Divider style={{marginTop:"10px"}} variant="fullwidth" component="li" />
    <ListItem alignItems="flex-start">
      
      <ListItemText
        primary="Code Review Best Practices"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textSecondary"
            >
              The Internet provides a wealth of material on code reviews: on the effect of code reviews on company culture, on formal security reviews…<br/><br/>Palantir in Palantir Blog<br/>
            </Typography>
            {'Mar 5, 2018 • 12 min read'}
          </React.Fragment>
        }
      />
      <ListItemAvatar>
        <Avatar className={classes.normalSize} variant="square" alt="Cindy Baker" src="https://cdn-images-1.medium.com/fit/c/190/195/1*O0Vxl1Vajl21Kt288ybc-w.png" />
      </ListItemAvatar>
    </ListItem>
  </List>





  );
}