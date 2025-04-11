import React, { useState } from 'react';
import axios from 'axios';

function PostModal({ onClose, onPostCreated }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      setError('Please fill in both title and content');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Get user data from localStorage
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const author = userData.nickname || 'Anonymous';

      console.log('Sending post request:', { title, content, author }); // Debug log

      const response = await axios.post('http://localhost:3000/api/posts', {
        title: title.trim(),
        content: content.trim(),
        author: author
      });

      console.log('Post response:', response.data); // Debug log

      if (onPostCreated) {
        onPostCreated(response.data);
      }
      onClose();
    } catch (error) {
      console.error('Post creation error:', error); // Debug log
      setError(error.response?.data?.error || error.message || 'Failed to create post');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal modal-open">
        <div className="modal-box w-11/12 max-w-5xl">
          <h2 className="font-bold text-2xl mb-4">New Post</h2>
          
          {error && (
            <div className="alert alert-error mb-4">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              disabled={isLoading}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Content</label>
            <textarea
              className="textarea textarea-bordered w-full h-40"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content here..."
              disabled={isLoading}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button 
              className="btn" 
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </button>
            <button 
              className={`btn btn-success ${isLoading ? 'loading' : ''}`}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'Creating...' : 'Post'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
