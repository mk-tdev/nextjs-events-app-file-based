import { useEffect, useState } from "react";
import NewComment from "./new-comment";
import CommentsList from "./comment-list";

const Comments = ({ eventId }: any) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  const addComment = (commentData: any) => {
    // Implement logic to add the new comment to the comments list
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New comment added:", data);
      });
  };

  useEffect(() => {
    if (showComments) {
      fetch(`/api/comments/${eventId}`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.comments);
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
          setComments([]);
        });
    }
  }, [eventId, showComments]);

  return (
    <div className="m-5 ">
      <div className="flex flex-col items-center">
        <button
          className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
          type="button"
          onClick={toggleComments}
        >
          {`${showComments ? "Hide" : "Show"}`} comments
        </button>
      </div>

      {showComments && (
        <>
          <NewComment addComment={addComment} />
          <CommentsList comments={comments} />
        </>
      )}
    </div>
  );
};

export default Comments;
