import React ,{Component} from 'react';

class TOC extends Component {
    render(){
      var data = this.props.data;

      var lists = [];
      var i = 0;
      while(i< data.length){
        lists.push(<li key={data[i].id}><a href={'/content/'+data[i].id}></a>{data[i].title}</li>);
        i = i + 1;
      }
      return(
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      )
    }
  }
  
  export default TOC