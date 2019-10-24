import React, { Component } from 'react'

export default class Comment extends Component {
    state = {
        username: "",
        usercomment:"",
        totalComments:[],
        
	};

	handleSubmit = event => {
        
        event.preventDefault();
		const comment = {
            name:this.state.username,
            comment:this.state.usercomment
        }
        
        const newComment = this.state.totalComments.concat(comment)
        
        this.setState({totalComments:newComment})
        this.setState({
            username: '',
            usercomment:""
          });
	};

	handleNameChange = event => {
        
        this.setState({username:event.target.value})
    };

    handleCommentChange = event => {
        
        this.setState({usercomment:event.target.value})
    };

    render() {
        return (
            <div className="totalCommentsClass">
                <form className="commentClass" onSubmit={event => this.handleSubmit(event)}>
                    <label>
                        Name:
                        <input className="nameClass" type="text" onChange={this.handleNameChange} value={this.state.username} />
                    </label>
                    <label>
                        Comment:
                        <input className="userCommentClass" type="text" onChange={this.handleCommentChange} value={this.state.usercomment} />
                    </label>
                    <input type="submit" className="commentBtn" value="Add Comment" />
                    
                    
                </form>
                
                <div className="allComments">
                    {this.state.totalComments.map(comment => {
                        return (<div className="displayComment">
                                    <span>
                                    <em>Name:</em>{comment.name}
                                    
                                    <em>Comment:</em> {comment.comment}
                                    </span>
                                    
                                </div>
                            )
                    })}
                    
                </div>

            </div>
        
        )
    }
}
