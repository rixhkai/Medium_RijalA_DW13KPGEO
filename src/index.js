import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./component/Header";
import {Container} from "@material-ui/core";
import {Home} from "./component/home/home";
import {Onezero} from "./component/category/OneZero";
import ArticleDetail from "./component/detail/ArticleDetail";
import NewStory from "./component/profile/NewStory";
import Comment from "./component/detail/Comment";
import Stories from "./component/profile/Story";

ReactDOM.render(
 <Router>
  <Switch>
   <Route exact path='/' component={Home} />
   <Route path='/category' component={Onezero} />
   <Route path='/articledetail' component={ArticleDetail} />
   <Route path='/comment' component={Comment} />
   <Route path='/new_story' component={NewStory} />
   <Route path='/stories' component={Stories} />
  </Switch>
 </Router>,

 document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
