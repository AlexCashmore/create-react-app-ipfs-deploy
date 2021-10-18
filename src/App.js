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
            activeComponent:'CV',
            randomPhrase:null,
        }

    }

    renderBody(activeComponent){
        switch(activeComponent){
            case 'CV': return( <CV/>);
            case 'Portfolio': return( <Portfolio/>);
            case 'Contact': return( <CV/>);
        }

    }
    getRandomPhrase(){
        const userDescriptorList = ['Champ,','Fact:','Everybody says','Dang...','Check it:','Just saying...','Superstar,','Tiger,','Self,','Know this:','News alert:','Girl,','Bro,','Excuse me but,','Experts agree:','In my opinion,','Okay, listen up'];
        const predicate=['the mere idea of you','your soul','your hair today','everything you do','your personal style','every thought you have','that sparkle in your eye','your presence here','what you got going on','the essential you','your lifes journey','your DNA,','that brain of yours,','your choice of attire,','the way you roll,','whatever your secret is,'];
        const connector=['has serious game,','rains magic,','is absolutely based','deserves a Nobel prize','raises the roof,','breeds miracles','is paying off big time,','shows mad skills,','just shimmers','is a national treasure','gets the party hopping','is the next big thing,','roars like a lion,','is a rainbow factory','is made of diamonds,','makes birds sing','should be taught in school','is one hundred percent legit,'];
        const kicker = ['24/7.','can i get an amen?','and thats a fact','so treat yourself','you feel me?','thats just science','would I lie?','for reals.','mic drop.','you hidden gem','periodt.','now lets dance.','high five.','chur.','so get used to it.',' ka pai','choice','facts'];
    const index1 = Math.floor(Math.random()*userDescriptorList.length)+1
    const index2 = Math.floor(Math.random()*predicate.length)+1
    const index3 = Math.floor(Math.random()*connector.length)+1
    const index4 = Math.floor(Math.random()*kicker.length)+1
        const result = `${userDescriptorList[index1-1]} ${predicate[index2-1]} ${connector[index3-1]} ${kicker[index4-1]}`
        return this.setState({randomPhrase:result});
    }
    //     {this.renderBody(this.state.activeComponent)}

    render() {
        return (
            <div className="App">
                <div className="normal">
                    <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
                        <div>
                            <div style={{maxWidth:500}}><h3>Cheer me up, Cashmore</h3> <div style={{height:20,width:175}} onClick={()=>{this.getRandomPhrase()}} className="actionButtonNew">{!this.state.randomPhrase?<b>Absolutely, let's go!</b>:<b>Give me another!</b>}</div></div>
                        <br/>
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <div style={{position:'relative'}}><img style={{position:'absolute',top:190,left:-90}} src={test0} className="React-logo" alt="react-logo"/></div>
                        {this.state.randomPhrase?<div
                        style={{ marginTop: 15, maxHeight: 370, minHeight: 150,width:'100%',maxWidth:750,minWidth:500 }}
                        className="messagePanelAnswerConversation speech-bubble-left"
                    >
                        <p style={{fontSize:36}} key={this.state.randomPhrase&&this.state.randomPhrase.length} className="fadedshort">{this.state.randomPhrase}</p>
                        <div className="speech-bubble__arrow_left" />
                        </div>:<div style={{minWidth:760,fontSize:100, fontWeight:900}}>. . .</div>}
                    </div>
                   {/* <div style={{width: '50%', display: 'flex', justifyContent: 'space-evenly'}}>
                        <div onClick={()=>{this.setState({activeComponent:'CV'})}} className={`nav-item ${this.state.activeComponent==='CV'&&'active-item'}`}>
                            //Resume
                        </div>
                        <div onClick={()=>{this.setState({activeComponent:'Portfolio'})}} className={`nav-item ${this.state.activeComponent==='Portfolio'&&'active-item'}`}>
                            //Portfolio
                        </div>
                    </div>*/}
                    </div>

            </div>
        );
    }
}

export default App;
