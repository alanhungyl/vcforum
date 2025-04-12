import React from 'react';

function PostContentModal({ post, onClose }) {
  if (!post) return null; // Ensure the modal doesn't render without a post

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal modal-open">
        <div className="modal-box w-11/12 max-w-5xl">
          <h2 className="font-bold text-2xl mb-4">{post.title}</h2>
          <p className="text-gray-700 mb-4">{post.content}</p>
          <p className="text-sm text-gray-500 mb-4">Author: {post.author}</p>
          <p className="text-sm text-gray-500 mb-4">Posted on: {new Date(post.timestamp).toLocaleString()}</p>

          <h3 className="font-bold text-xl mb-4">Comments</h3>
          {post.comments && post.comments.length > 0 ? (
            <div className="space-y-4">
              {post.comments.map((comment) => (
                <div key={comment.id} className="p-4 border rounded-lg">
                  <p className="text-gray-700">{comment.text}</p>
                  <p className="text-sm text-gray-500 mt-2">By: {comment.author || 'Anonymous'}</p>
                  <p className="text-sm text-gray-500">{new Date(comment.timestamp).toLocaleString()}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}

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