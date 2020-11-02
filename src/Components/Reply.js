import React,{Component} from 'react';

class Reply extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render(){
        const {commentId}=this.props;
        return(
            <div>
                <button>Reply</button>
                <textarea></textarea>
            </div>
        )
    }
}
export default Reply;