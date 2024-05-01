const CommentsList = ({ comments }: any) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <ul className="space-y-4">
        {comments.map((comment: any) => (
          <li key={comment._id} className="bg-gray-100 p-4 rounded-md">
            <div className="flex items-center mb-2 gap-3">
              <h3 className="font-bold">{comment.name}</h3>
              <p className="text-gray-600">{comment.email}</p>
            </div>
            <p>{comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
