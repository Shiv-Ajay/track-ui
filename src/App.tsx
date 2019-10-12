import * as React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <div className="container-fluid">
          <Switch>
            <Route path={'/'} exact component={ Dashboard } />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
