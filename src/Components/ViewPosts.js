import React,{Component} from 'react';
import axios from 'axios';
import ListPosts from './ListPosts';
class ViewPosts extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').
        then(res=>{
            this.setState({posts:res.data})
        }     
        )
    }
    render(){
        return(
            <div>
                <ListPosts  data={this.state.posts}/>
            </div>
        )
    }
}
export default ViewPosts;