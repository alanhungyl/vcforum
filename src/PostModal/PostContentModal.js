import React, { useState } from 'react';

function PostContentModal({ post, onClose }) {
  const [newComment, setNewComment] = useState(''); // State for the new comment

  if (!post) return null; // Ensure the modal doesn't render without a post

  const handleAddComment = () => {
    if (!newComment.trim()) {
      alert('Comment cannot be empty.');
      return;
    }

    // Add the new comment to the post's comments
    post.comments.push({
      id: Date.now(), // Generate a unique ID for the comment
      text: newComment,
      author: 'Anonymous', // Replace with the actual user if available
      timestamp: new Date().toISOString(),
    });

    setNewComment(''); // Clear the input field
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal modal-open">
        <div className="modal-box w-11/12 max-w-5xl">
          {/* Title and Metadata */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-bold text-4xl">{post.title}</h2>
            <div className="text-right">
              <p className="text-sm text-white">Author: {post.author}</p>
              <p className="text-sm text-gray-500">Posted on: {new Date(post.timestamp).toLocaleString()}</p>
            </div>
          </div>

          {/* Post Content */}
          <p className="text-white text-2xl mb-8">{post.content}</p>

          {/* Comments Section */}
          {post.comments && post.comments.length > 0 ? (
            <div className="space-y-4">
              {post.comments.map((comment) => (
                <div key={comment.id} className="p-4 border rounded-lg">
                  <p className="text-white ">{comment.text}</p>
                  <p className="text-sm text-gray-500 mt-2">By: {comment.author || 'Anonymous'}</p>
                  <p className="text-sm text-gray-500">{new Date(comment.timestamp).toLocaleString()}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}

          {/* Add Comment Section */}
          <div className="mt-8">
            <textarea
              className="w-full p-2 border rounded-lg block-background-color text-white"
              rows="3"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <div className="flex justify-end mt-4">
              <button className="btn btn-ghost custom-purple-bg text-white" onClick={handleAddComment}>
                Add Comment
              </button>
            </div>
          </div>

          {/* Close Button */}
          <div className="flex justify-end mt-4">
            <button className="btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostContentModal;