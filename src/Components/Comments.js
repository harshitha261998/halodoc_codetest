import React,{Component, Fragment} from 'react';
import axios from 'axios';
import Reply from './Reply';
import AddComment from './AddComment';
import {isEmpty,forOwn} from 'lodash';
import styles from './../Styles/styles';

class Comments extends Component{
    constructor(props){
        super(props);
        this.state={
            comments:[]
        }
    }
    componentDidMount(){
        const {postId}=this.props;
        axios.get('https://jsonplaceholder.typicode.com/posts/' +postId +'/comments')
        .then(res=>{
            this.setState({
                comments:res.data
            },()=>{
                this.addNewComments();
            })
        })
        if(!localStorage.getItem('Comments'))
            localStorage.setItem('Comments','{}');
    }
    addNewComments = ()=>{
        const {postId}=this.props;
        let newComments=JSON.parse(localStorage.getItem('Comments'));
        newComments=Object.keys(newComments).filter(key=>{
            return key==postId});
        forOwn(Object.values(newComments),(comment,index)=>{
            debugger
        })
        this.setState({
            comments:[...this.state.comments,...newComments]
        })
    }
    updateReply=(commenntId)=>{
        const {postId}=this.props;
        let newComments=JSON.parse(localStorage.getItem('Comments'));
        newComments=Object.keys(newComments).filter(key=>key===postId);
    }
 
    displayReplies = (comments) =>{
        this.setState({
            comments:[...this.state.comments,comments.value]
        })
        if(comments.replies!=null)
            this.displayReplies(comments.replies);
    }
    render(){
        const {comments}=this.state;
        const {postId}=this.props;
        return(
           <div>
               <h4>COMMENTS</h4>
               <p>Comment 1</p>
               {comments.map((eachComment,index)=>{
                   return(
                       <div key={eachComment.id}>
                           {eachComment.body} 
                           {/* {this.displayReplies(JSON.parse(localStorage.getItem('Comments'))[postId])} */}
                           <button onClick={this.updateReply(eachComment.id)}>Reply</button>
                           {/* <Reply key={eachComment.id} commentId={eachComment.id} postId={eachComment.postId} /> */}
                       </div>
                   );

               })}
               {!isEmpty(comments) ?
               <Fragment>
               <p>Comment 2</p>
               <AddComment postId={this.props.postId} />
               </Fragment>:null
               }

           </div>
        )
    }
}
export default Comments;