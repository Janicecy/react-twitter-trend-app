import React, { Component } from 'react';
import MyHeader from './Header'
import TrendList from './TrendList'
class App extends Component{
  render() {
    return (
        <div>
          <MyHeader />
          <TrendList />
        </div>
    )
  }
}

export default App;
