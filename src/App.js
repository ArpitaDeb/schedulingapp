import React, { Component } from 'react';
import Employee from './Component/Employee';
import Schedule from './Component/Schedule';



class App extends Component {
  render() {
    return (
        <div style={{}}>
          <Employee/>
          <Schedule/>
        </div>

    );
  }
};

const style = {
  appContainerStyle: {
    
  }
}

export default App;
