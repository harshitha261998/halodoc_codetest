import React,{Component} from 'react';

class AddComment extends Component{
    constructor(props){
        super(props);
        this.state={
            comment:""
        }
    }
    handleChange= (event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    addComment = (event)=>{
        event.preventDefault()
        const {postId}=this.props;
        let d=new Date().getTime();
        let addedComments=JSON.parse(localStorage.getItem('Comments'));
        let postComments=addedComments && addedComments[postId] ? addedComments[postId]:{};
        let index=Object.keys(postComments).length;
        postComments[index+1]=this.state.comment;
        addedComments={...addedComments,[postId]:postComments};
        localStorage.setItem('Comments',JSON.stringify(addedComments));
        this.setState({comment:''})

    }
    render(){
        const {comment}=this.state;
        return(
            <div>
               <textarea onChange={this.handleChange} value={comment} />
               <button onClick={this.addComment} >ADD COMMENT</button>
            </div>
        )
    }
}
export default AddComment;