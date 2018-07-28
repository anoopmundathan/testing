import React from "react";
import { CommentBox } from "./CommentBox";
import { CommentList } from "./CommentList";

export class App extends React.Component {
  state = {
    commentList: ["one", "two"]
  }

  postComment = (text) => {
    this.setState({
      commentList: [...this.state.commentList, text]
    })
  }

  render() {
    return (
      <div>
        <CommentBox postComment={this.postComment} />
        <CommentList 
          comments={this.state.commentList} />
      </div>
    );
  }
}
