import "babel-polyfill";

import React from "react";
import ReactDom from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { Button } from 'reactstrap';

import store from "./../store/store";
import { fetchUser } from "../actions/userActions";
import { fetchTweets } from "../actions/tweetsActions";

import Layout from "./layout/layout.component";
import Dashboard from "./dashboard/dashboard.component";

import Temp from './temp';

require('./index.scss');

// @connect((store) => {
//   return {
//     user: store.user.user,
//     userFetched: store.user.fetched,
//     tweets: store.tweets.tweets,
//   }
// })
// export default class App extends React.Component {
//   componentWillMount() {
//     this.props.dispatch(fetchUser());
//   }
//   fetchTweets() {
//     this.props.dispatch(fetchTweets());
//   }
//   render() {
//     const { user, tweets } = this.props;
//
//     if (!tweets.length) {
//       return <Button color="danger" onClick={this.fetchTweets.bind(this)}>Load Tweets</Button>
//     }
//     const mappedTweets = tweets.map(tweet => <li key={"tweet" + tweet.id}>{tweet.text}</li>);
//
//     return <div>
//       <h1>{this.props.user.name}</h1>
//       <ul>{mappedTweets}</ul>
//       {this.props.children}
//     </div>;
//   }
// }

ReactDom.render(<Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Dashboard} />
        <Route path="temp" component={Temp} />
      </Route>
    </Router>
  </Provider>
, document.querySelector('#app'));




// import { applyMiddleware, combineReducers, createStore } from "redux";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
// import axios from "axios";
//
// const initialState = {
//   fetching: false,
//   fetched: false,
//   users: [],
//   error: null,
// }
//
// const userReducer = (state=initialState, action) => {
//   switch (action.type) {
//     case "FETCH_USERS_START": {
//       return {...state, fetching: true}
//       break;
//     }
//     case "FETCH_USERS_ERROR": {
//       return {...state, fetching: false, error: action.payload}
//       break;
//     }
//     case "RECEIVE_USERS": {
//       return {...state, fetching: false, fetched: true, users: action.payload}
//       break;
//     }
//
//     case "CHANGE_NAME": {
//       state = {...state, name: action.payload};
//       break;
//     }
//     case "CHANGE_AGE": {
//       state = {...state, age: action.payload};
//       break;
//     }
//     case "E": {
//       throw new Error("Simple Error.");
//       break;
//     }
//     default:
//   }
//   return state;
// };
//
// const tweetsReducer = (state=[], action) => {
//   return state;
// };
//
// const reducers = combineReducers({
//   user: userReducer,
//   tweets: tweetsReducer,
// });
//
// // const logger = (store) => (next) => (action) => {
// //   console.log("action fired", action);
// //   next(action);
// // }
//
// const error = (store) => (next) => (action) => {
//   try {
//     next(action);
//   } catch (e) {
//     console.log("Error: ", e);
//   }
// }
//
// const middleware = applyMiddleware(error, thunk, logger());
//
// const store = createStore(reducers, {}, middleware);
//
// store.subscribe(() => {
//   console.log("Store changed", store.getState());
// });
//
// store.dispatch((dispatch) => {
//   dispatch({type: "FETCH_USERS_START"});
//   axios.get('http://rest.learncode.academy/api/wstern/users')
//     .then((response) => {
//       dispatch({type: "RECEIVE_USERS", payload: response.data});
//     })
//     .catch((error) => {
//       dispatch({type: "FETCH_USERS_ERROR", payload: error})
//     });
// });
//
// // store.dispatch({type: "CHANGE_NAME", payload: "Will"});
// // store.dispatch({type: "CHANGE_AGE", payload: 35});
// // store.dispatch({type: "E"});
