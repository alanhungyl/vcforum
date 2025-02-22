import React, { useState } from 'react';

function CommentModal({ onClose }) {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleDiscard = () => {
    setComment('');
    onClose();
  };

  const handleComment = () => {
    // Handle adding the comment
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal modal-open">
        <div className="modal-box w-11/12 max-w-5xl">
          <h2 className="font-bold text-2xl mb-4">Add Comment</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Comment</label>
            <textarea
              className="textarea textarea-bordered w-full h-40"
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
          </div>
          <div className="flex justify-end space-x-4">
            <button className="btn" onClick={handleDiscard}>Discard</button>
            <button className="btn btn-success" onClick={handleComment}>Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentModal;
