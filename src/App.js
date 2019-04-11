import React, { Component } from 'react';
import Employee from './Component/Employee';
import Schedule from './Component/Schedule';


const user1 ={
    day1:'Monday 1am-1pm',
    day2:'tuesday 1am-1pm',
    day3:'wednesday 1am -1pm',
};
const user2={
    day1:'thursday 2am-2pm',
    day2:'tuesday 2am-2pm',
    day3:'wednesday 2am -2pm',
};
const user3={
    day1:'Monday 3am-3pm',
    day2:'tuesday 3am-3pm',
    day3:'wednesday 3am -3pm',
};

class App extends Component {
    displaySchedule= (id)=>{
        console.log(user1);
        console.log('button id:'+id);

    };
    render() {
        return (
            <div style={styles.appContainerStyle}>
                    <Employee displaySchedule={this.displaySchedule}/>
                    <Schedule userSchedule={user3}/>
            </div>
        );
    }
};

const styles = {

  appContainerStyle: {
    display : 'flex',
    flex:1,
    height:'100vh',
    width:'100vw',
    flexDirection: 'row',
  }
};

const style = {
  appContainerStyle: {
    
  }
}

export default App;
