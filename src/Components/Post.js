import React,{Component} from 'react';
import axios from 'axios';
import Comments from './Comments';
import AddComment from './AddComment';
class Post extends Component{
    constructor(props){
        super(props);
        this.state={
            currentPost:[],
            user:[]
        }
    }
    componentDidMount(){
        const {postId}=this.props.match.params;
        let url='https://jsonplaceholder.typicode.com/posts/'+postId;
        axios.get(url)
        .then(res=>{
            this.setState({
                currentPost:res.data
            },()=>{
                this.fetchUser()
            })
        })
    }
    fetchUser=()=>{
        const {currentPost}=this.state;
        axios.get('https://jsonplaceholder.typicode.com/users/'+currentPost.userId)
        .then(res=>{
            this.setState({user:res.data})
        })
    }
    render(){
        const {currentPost,user}=this.state;
        return(
           <div>
               <h5>{currentPost.title}</h5>
               <p>{currentPost.body}</p>
               <div>
                   <p>UserName: {user.username}</p>
                   <p>City: {user.address && user.address.city}</p>
                   <p>Email: {user.email}</p>
                   <p>Phone: {user.phone}</p>
               </div>
               {currentPost.id && <Comments key={Math.random()} postId={currentPost.id} />}
               {/* {currentPost.id && <AddComment key={Math.random()} postId={currentPost.id} />} */}

           </div>
        )
    }
}
export default Post;