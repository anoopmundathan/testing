import React from "react";
import CommentBox from "./CommentBox";
import CommentList  from "./CommentList";

export class App extends React.Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}
