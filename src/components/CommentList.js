import React from "react";
import { comment } from "../../node_modules/postcss";

export const CommentList = ({ comments }) => {
  
  return (
    <div>
      <ul>
        {comments.map((comment, index) => <li key={index}>{comment}</li>)}
      </ul>
    </div>
  );

}
