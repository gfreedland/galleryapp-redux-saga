import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import noMatch from '../Components/NoMatch';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Gallery Redux Saga App</h1>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/photos" exact component={Gallery} />
          <Redirect exact from="/" to="/home" />
          <Route component={noMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
