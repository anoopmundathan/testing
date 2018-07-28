import React from "react";
import { connect } from "react-redux";

const CommentList = (props) => {
  
  return (
    <div>
      <ul>
        {props.comments.map((comment, index) => <li key={index}>{comment}</li>)}
      </ul>
    </div>
  );

}

const mapDispatchToProps = (state) => ({ comments: state.comment })
export default connect(mapDispatchToProps)(CommentList);
