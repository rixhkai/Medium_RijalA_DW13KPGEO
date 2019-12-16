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
import Bookmarks from "./component/bookmark/Bookmarks";
import ProfilPage from "./component/profile/ProfilePage";
import Comment from "./component/detail/Comment";
import Stories from "./component/profile/Story";
import Stats from "./component/profile/Stats";
import ArticlePerson from "./component/home/ArticlePerson";

ReactDOM.render(
 <Router>
  <Switch>
   <Route exact path='/' component={Home} />
   <Route path='/category' component={Onezero} />
  </Switch>
 </Router>,

 document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
