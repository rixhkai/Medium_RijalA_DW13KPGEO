import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Grid, Box} from '@material-ui/core';
import './content.css'
import StarRateIcon from '@material-ui/icons/StarRate';
import AlignItemsList from './middleCont';
import SimpleList from './sideBar';

const useStyles = makeStyles(theme=> ({
  card: {
    maxWidth: "1308px",
    margin: "12px auto 0 auto",
    fontFamily: "medium-content-sans-serif-font,-apple-system,BlinkMacSystemFont, Segoe UI ,Roboto,Oxygen,Ubuntu,Cantarell, Open Sans , Helvetica Neue ,sans-serif",
  },
  cards: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    paddingLeft: theme.spacing(1),
  },
  cover: {
    width: 100,
    height: 100,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },

  some: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  featuredFeed:{
    display: 'flex',
    flexDirection: 'row',
  },
  contentss:{
      display: 'flex',
      flexDirection: 'row',
      maxWidth: '1032px'
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
      <div align="center" >
          <div >
          <div className={classes.card}>
          <Grid container className={classes.featuredFeed} spacing={2} >
              <Grid item xs={12} sm={6} md={4} >
                <div className="space">
            
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    width="100%"
                    height="150"
                    image="https://cdn-images-1.medium.com/fit/c/520/189/1*eHc3cNEAM9kro06WSPQG3w.jpeg"
                    title="Contemplative Reptile"
                    />
                    <div align="start">
                    <CardContent >
                    <Typography gutterBottom variant="subtitle1" component="h1" style={{fontWeight:"bold"}}>
                        2020 Programming Trend Predictions
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Predicting what programming technologies will emerge in 2020
                    Indrek Lasn in Better Programming
                    </Typography>
                    <div className="marginTop12">
                        <Typography variant="body2" color="textSecondary" component="p">Indrek Lasn in Better Programming</Typography>
                        <div content= "\00B7" className={classes.some}>
                        <Typography variant="subtitle2" style={{color:"grey"}}>Jul 22 • 6 min read &nbsp; </Typography> <StarRateIcon style={{color:"grey"}}/>
                        </div>
                    </div>
                    </CardContent>
                    </div>
                </CardActionArea>
                
                
                </div>
            </Grid>

            <Grid item xs={12} sm={6} md={4} >
                
                <Grid item xs={12}>
                    <Grid className={classes.cards}>
                    <CardMedia
                    className={classes.cover}
                    image="https://cdn-images-1.medium.com/fit/c/125/125/1*OF18Yw2PniRLIkBUao8EDA.png"
                    title="Live from space album cover"
                />
                <div className={classes.details}>
                    <div align="start" alignItems="flex-start">
                    <Grid className={classes.content} style={{maxWidth:"300px"}}>
                    <Typography component="h1" variant="body2" style={{fontSize:"15px", fontWeight:"bold"}}>
                    MVVM architecture, ViewModel and LiveData — Part 3 (AndroidX..<br/><br/>
                    </Typography>
                    <Typography variant="body2" color="grey" style={{fontSize:"12px"}}>
                    Hazem Saleh in ProAndroidDev
                    </Typography>
                    </Grid>
                    </div>
                    <div className={classes.controls} spacing={1}>
                    <Typography variant="body2" style={{color:"grey"}}>
                        Oct 8, 2018 •<span content= "\00B7"> &nbsp; {" "}</span>
                    </Typography> 
                    <Typography variant="body2" style={{color:"grey"}}> <div content= "\00B7"></div>9 min read &nbsp; </Typography> <StarRateIcon style={{color:"grey"}}/>
                    </div>
                    </div>
                    </Grid>
                </Grid>

                    <div className="botSpace"></div>

                    <Grid item xs={12} >
                        <Grid className={classes.cards}>
                            <CardMedia
                                className={classes.cover}
                                image="https://cdn-images-1.medium.com/focal/125/125/49/59/0*-vvuuXp-N6wIqLvP.jpg"
                                title="Live from space album cover"
                            />
                            <div className={classes.details}>
                            <div align="start" alignItems="flex-start">
                                <Grid className={classes.content} style={{maxWidth:"300px"}}>
                                    <Typography component="h1" variant="body2" style={{fontSize:"15px", fontWeight:"bold"}}>
                                        When a Robot Writes Your News, What Happens to Democracy?<br/><br/></Typography>
                                    <Typography variant="body2" color="grey" style={{fontSize:"12px"}}>
                                        CNN</Typography>
                                </Grid>
                                </div>
                                <div className={classes.controls}>
                                    <Typography variant="body2" style={{color:"grey"}}>
                                        Feb 28, 2018 • <span content= "\00B7"> &nbsp; {" "}</span></Typography>
                                    <Typography variant="body2" style={{color:"grey"}}> <div content= "\00B7"></div>6 min read &nbsp; </Typography> <StarRateIcon style={{color:"grey"}}/>
                                </div>
                            </div>
                        </Grid>  
                    </Grid>

                    <div className="botSpace"></div>

                    <Grid item xs={12} display="flex">
                        <Grid className={classes.cards}>
                            <CardMedia
                                className={classes.cover}
                                image="https://cdn-images-1.medium.com/fit/c/125/125/0*UYOnTliperyu9oea"
                                title="Live from space album cover"
                            />
                            <div className={classes.details}>
                            <div align="start" alignItems="flex-start">
                                <Grid className={classes.content}style={{maxWidth:"280px"}}>
                                    <Typography  component="h1" variant="body2" style={{fontSize:"15px", fontWeight:"bold"}}>
                                        From Bootcamp to Junior Developer Life<br/><br/></Typography>
                                    <Typography variant="body2" color="grey" style={{fontSize:"12px"}}>
                                        Richard Thompson in BuildEmpire</Typography>
                                </Grid>
                                </div>
                                <div className={classes.controls}>
                                    <Typography variant="body2" style={{color:"grey"}}>
                                        Oct 29, 2018 • <span content= "\00B7"> &nbsp; {" "}</span></Typography>
                                    <Typography variant="body2" style={{color:"grey"}}> <div content= "\00B7"></div>6 min read &nbsp; </Typography> <StarRateIcon style={{color:"grey"}}/>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                
            </Grid>

            <Grid item xs={12} sm={8} md={4} >
                
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="150"
                    image="https://cdn-images-1.medium.com/fit/c/630/278/1*h54BoyN7ZNeCIA0PmTttUw.jpeg"
                    title="Contemplative Reptile"
                    />
                   <div align="start"> 
                    <Grid>
                    <Typography gutterBottom variant="h7" component="h2" style={{maxWidth:"300px"}}>
                    Do These Things Before Going to Bed and You’ll Wake up... 
                    </Typography>
                    <div className="marginTop12">
                            <Typography variant="body2" color="textSecondary" component="p">
                            Your day really starts the night before.</Typography>
                                <div content= "\00B7" className={classes.some}>
                        <Typography variant="subtitle2" style={{color:"grey"}}>Nov 27 • 5 min read &nbsp; </Typography> <StarRateIcon style={{color:"grey"}}/>
                        </div>
                    </div>
                    </Grid>
                    </div>
                </CardActionArea>
                
               
            </Grid>
         </Grid>
         </div>

    <div className="divider"></div> {/* divide content */}

        
    </div>

    <div >
            <Grid container spacing={0} style={{maxWidth:"1032px"}} className={classes.card}>
                <Grid item style={{margin:"0px 0px 0px auto",width:"400px"}} >
                <SimpleList/>
            </Grid>
            <Grid item xs={12} md={7} style={{margin:"0px auto 0px 0px", width:"600px"}}>
                <AlignItemsList />
            </Grid>
            </Grid>
        </div>
    </div>
  );
}