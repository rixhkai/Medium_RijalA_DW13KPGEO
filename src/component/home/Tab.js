import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HomeIcon from "@material-ui/icons/Home";
import MovieIcon from "@material-ui/icons/Movie";
import {ImgMediaCard} from "./Content";
//import Onezero from './category/OneZero';

const thing = [
 {
  id: 0,
  title: "HOME",
  href: "/"
 },
 {
  id: 1,
  title: "ONEZERO",
  href: "/category"
 },
 {
  id: 2,
  title: "ELEMENTAL"
 },
 {
  id: 3,
  title: "GEN",
  href: ""
 },
 {
  id: 4,
  title: "ZORA",
  href: ""
 },
 {
  id: 5,
  title: "FORGE",
  href: ""
 },
 {
  id: 6,
  title: "HUMAN PARTS",
  href: ""
 },
 {
  id: 7,
  title: "MARKER"
 },
 {
  id: 8,
  title: "LEVEL"
 },
 {
  id: 9,
  title: "HEATED"
 },
 {
  id: 10,
  title: "MODUS"
 },
 {
  id: 11,
  title: "MORE"
 }
];

const useStyles = makeStyles(theme => ({
 root: {
  flexGrow: 1,
  width: "100%",
  backgroundColor: theme.palette.background.paper
 }
}));

export default function ScrollableTabsButtonForce() {
 const classes = useStyles();

 return (
  <div className={classes.root}>
   <div position='static' color='default' align='center'>
    <Tabs
     style={{maxWidth: "1032px"}}
     alignItems='center'
     variant='scrollable'
     scrollButtons='on'
     indicatorColor='primary'
     textColor='primary'
     aria-label='scrollable force tabs example'
    >
     {thing.map(item => (
      <Tab label={item.title} href={item.href} />
     ))}
    </Tabs>
   </div>
  </div>
 );
}
