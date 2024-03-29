import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="container" >
        <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/movie/:imdbID"} component={MovieDetail} />
        <Route component={PageNotFound} />
        </Switch>
        </div>
        <Footer />  
      </Router>
    </div>
  );
}

export default App;
