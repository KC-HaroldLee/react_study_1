import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode : 'welcome', 
      welcome : {title:"Welcome", desc:'Welcome message'},
      subject : {title : 'WEB', sub: 'world wire web'},
      contents : [
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render(){ // 다시 호출 됨!
  return (
    
    <div className="App">
      <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
      {/* <Subject title="{this.state.subject.title}" sub="{this.state.subject.sub}"></Subject> */}
      <TOC data={this.state.contents}></TOC>
      <Content></Content>
      <h1>안녕 리액트</h1>
    </div>
    );
  }
}

export default App;
