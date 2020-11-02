import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
class ListPosts extends Component{
    
    constructor(props){
        super(props);
        this.state={

        }
    }
    openPosts = (item) =>{
        let path=`/post/${item.id}`;

        this.props.history.push(path);
    }
    render(){
        const {data}=this.props;
        return(
            <div>
              {data.map((item,index)=>{
                  return(
                      <div onClick={()=>{this.openPosts(item)}}>
                   <h2>{item.title}</h2>
                   <div>{item.body}</div>
                   </div>
                  )
              })}  
            </div>
        )
    }
}
export default withRouter(ListPosts);