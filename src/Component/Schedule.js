import React, {Component} from 'react';


const style= {
    scheduleStyle: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    }
}

class Schedule extends Component{
    render(){
        const {day1,day2,day3} = this.props.userSchedule;
        return(
            <div style={style.scheduleStyle}>
                <button>
                    {day1}
                </button>
                <button>
                    {day2}
                </button>
                <button>
                    {day3}
                </button>
            </div>
        );
    }
}

export default Schedule;