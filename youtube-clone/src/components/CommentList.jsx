import Comment from "./Comment";
const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 ">
        <CommentList comments={comment.replies} />
        {/* want to call the list again with replies array data so for that need to call the component agaian */}
      </div>
    </div>
  ));
};
export default CommentList;
