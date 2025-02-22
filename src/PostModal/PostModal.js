import React, { useState } from 'react';
import { addPost } from '../posts'; // Import the addPost function

function PostModal({ post, onClose, onComment }) {
  const [commentText, setCommentText] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      onComment(commentText);
      setCommentText('');
    }
  };

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setNewContent(e.target.value);
  };

  const handlePostSubmit = () => {
    if (newTitle.trim() && newContent.trim()) {
      addPost(newTitle, newContent);
      setNewTitle('');
      setNewContent('');
      onClose(); // Close the modal after posting
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal modal-open">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="mb-6 p-6 block-background-color rounded-lg">
            <h2 className="font-bold text-2xl mb-4">{post.title}</h2>
            <p>{post.content}</p>
          </div>
          <div className="mb-6">
            {post.comments && post.comments.length > 0 ? (
              post.comments.map((comment, index) => (
                <div key={index} className="mb-4 p-6 block-background-color rounded-lg">
                  <p>{comment.text}</p>
                  <p className="text-gray-400 text-sm">- {comment.author}</p>
                </div>
              ))
            ) : (
              <div className="p-6 block-background-color rounded-lg">
                <p>No comments yet.</p>
              </div>
            )}
          </div>
          <div className="mb-6">
            <textarea
              className="textarea textarea-bordered w-full"
              value={commentText}
              onChange={handleCommentChange}
              placeholder="Write a comment..."
            />
          </div>
          <div className="mb-6">
            <input
              className="input input-bordered w-full mb-4"
              value={newTitle}
              onChange={handleTitleChange}
              placeholder="Post title"
            />
            <textarea
              className="textarea textarea-bordered w-full"
              value={newContent}
              onChange={handleContentChange}
              placeholder="Post content"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button className="btn" onClick={onClose}>Close</button>
            <button className="btn btn-success" onClick={handleCommentSubmit}>Comment</button>
            <button className="btn btn-primary" onClick={handlePostSubmit}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
