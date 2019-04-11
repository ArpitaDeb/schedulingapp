import React,{Component} from 'react';


const style= {
    empStyle: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        borderWidth: 5,
        borderStyle: 'solid'
    },
    buttonStyle: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: 'green',
        height: 100,
    }
}
class Employee extends Component{
    click=()=>{
        console.log();
    }
    render(){
        const {displaySchedule}=this.props;
        return(
            <div style={style.empStyle}>

                <button
                    onClick={()=>displaySchedule('arpita')}
                    style={style.buttonStyle}
                >
                    User 1
                </button>

                <button
                    onClick={()=>displaySchedule('Nelson')}
                    style={style.buttonStyle}
                >
                    User 2
                </button>

                <button
                    onClick={()=>displaySchedule('Dolapo')}
                    style={style.buttonStyle}
                >
                    User 3
                </button>
            </div>
        );
    }

}

export default Employee;