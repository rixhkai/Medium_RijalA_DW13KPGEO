import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import {Grid, Box} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root} position="sticky">
      <List component="nav" aria-label="main mailbox folders">
        <Grid >
          <Typography align="left" variant="h6" style={{fontWeight:"bold", marginBottom:"10px"}} >Popular on Medium </Typography>
        </Grid>
        <Divider />
        
      </List>
      
      <Grid container spacing={1}>
        <Grid item button>
          <Typography variant="h4" align="left" style={{color:"grey"}}>
            01
          </Typography>
        </Grid>
          <Grid item align="start" style={{maxWidth:"300px"}}>
          <Typography variant="body2" 
               
              style={{fontWeight:"bold"}} >Scientists Are Contemplating a 1,000-Year Space Mission to Save Humanity</Typography>
          <Typography variant="body2" style={{color:"grey"}}> 
          <br/>Corin Faife in OneZero<br/>Dec 5 • 13 min read 
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{marginTop:"10px"}}>
        <Grid item button>
          <Typography variant="h4" align="left" style={{color:"grey"}}>
            02
          </Typography>
        </Grid>
          <Grid item align="start" style={{maxWidth:"300px"}}>
          <Typography variant="body2" 
               
              style={{fontWeight:"bold"}} >My Son Wore a Dress for Picture Day, and It Reaffirmed My Faith in Humanity</Typography>
          <Typography variant="body2" style={{color:"grey"}}> 
          <br/>Alex Richards in Apparently<br/>Nov 13 • 4 min read 
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{marginTop:"10px"}}>
        <Grid item button>
          <Typography variant="h4" align="left" style={{color:"grey"}}>
            03
          </Typography>
        </Grid>
          <Grid item align="start" style={{maxWidth:"300px"}}>
          <Typography variant="body2" 
               
              style={{fontWeight:"bold"}} >Do These Things Before Going to Bed and You’ll Wake up Energized for Tomorrow</Typography>
          <Typography variant="body2" style={{color:"grey"}}> 
          <br/>Tim Denning in P.S. I Love You<br/>Nov 27 • 5 min read 
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{marginTop:"10px"}}>
        <Grid item button>
          <Typography variant="h4" align="left" style={{color:"grey"}}>
            04
          </Typography>
        </Grid>
          <Grid item align="start" style={{maxWidth:"300px"}}>
          <Typography variant="body2" 
               
              style={{fontWeight:"bold"}} >The Absurd Story Behind China’s Biggest Bank Robbery</Typography>
          <Typography variant="body2" style={{color:"grey"}}> 
          <br/>David Gauvey Herbert in Marker<br/>Dec 4 • 28 min read 
          </Typography>
        </Grid>
      </Grid>

      <Divider style={{marginTop:"80px", marginBottom:"30px"}}/>
      <Grid align="start" style={{maxWidth:"300px"}} >
        <Typography variant="body2" style={{color:"grey"}}> Help &nbsp; Status &nbsp; Writers &nbsp; Blog &nbsp; Careers <br/> Privacy &nbsp; Terms &nbsp; About</Typography>
      </Grid>

    </div>
  );
}