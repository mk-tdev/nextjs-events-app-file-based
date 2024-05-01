const NewComment = ({ addComment }: any) => {
  const handleNewComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const commentData = {
      name: formData.get("name"),
      email: formData.get("email"),
      comment: formData.get("comment"),
    };
    // Here, you can add the logic to send the comment data to the server or perform any other necessary
    addComment(commentData);

    // reset the form
  };

  return (
    <div className="m-5">
      <form className="flex flex-col  gap-4" onSubmit={handleNewComment}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="p-3 border border-yellow-300 ring-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="p-3 border border-yellow-300 ring-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            name="comment"
            placeholder="Your Comment"
            className="p-3 border border-yellow-300 ring-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewComment;
