import React from 'react';
import fleekLogo from './fleek-logo.png';
import reactLogo from './react-logo.svg';
import test0 from './test0.gif';

import './App.css';
import {CV} from "./CV";
import {Portfolio} from "./Portfolio";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            activeComponent:'CV'
        }

    }

    renderBody(activeComponent){
        switch(activeComponent){
            case 'CV': return( <CV/>);
            case 'Portfolio': return( <Portfolio/>);
            case 'Contact': return( <CV/>);
        }

    }

    render() {
        return (
            <div className="App">
                <div className="normal">
                    <img src={test0} className="React-logo" alt="react-logo"/>
                    <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
                    <div style={{width: '50%', display: 'flex', justifyContent: 'space-evenly'}}>
                        <div onClick={()=>{this.setState({activeComponent:'CV'})}} className={`nav-item ${this.state.activeComponent==='CV'&&'active-item'}`}>
                            //Resume
                        </div>
                        <div onClick={()=>{this.setState({activeComponent:'Portfolio'})}} className={`nav-item ${this.state.activeComponent==='Portfolio'&&'active-item'}`}>
                            //Portfolio
                        </div>
                    </div>
                    </div>
                </div>
                <body className="app-body">
                {this.renderBody(this.state.activeComponent)}


                </body>
            </div>
        );
    }
}

export default App;
