import * as React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
      </div>
    )
  }
}

export default App;
