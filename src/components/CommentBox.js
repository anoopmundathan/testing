import React from "react";

export class CommentBox extends React.Component {
  state = {
    comment: ''
  }

  change = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.postComment(this.state.comment)
    this.setState({ comment: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} >
          <div>
            <textarea 
              onChange={this.change}
              name=""
              id="" 
              cols="30" 
              rows="10"
              value={this.state.comment}>
            </textarea>
          </div>
          <div>
            <button>Post comment</button>
          </div>
        </form>
      </div>
    );
  }
}

