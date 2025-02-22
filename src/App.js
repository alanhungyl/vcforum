import React, { useState } from 'react';
import { ReactComponent as Notification } from './icons/Notification.svg';
import { ReactComponent as Search } from './icons/Search.svg';
import { ReactComponent as Home } from './icons/Home.svg';
import { ReactComponent as Message } from './icons/Message.svg';
import { ReactComponent as ConnectButton } from './icons/ConnectButton.svg';
import UserIcon from './icons/UserIcon.png';
import cuhklogo from './icons/cuhklogo.png';
import LoginModal from './LoginModal/LoginModal.js';
import LoginModalContent from './LoginModal/LoginModalContent.js';
import posts from './posts.js';
import './App.css';
import PostModal from './PostModal/PostModal.js';
import CommentModal from './CommentModal/CommentModal.js';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const toggleNewPostModal = () => {
    setIsNewPostModalOpen(!isNewPostModalOpen);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const closePostModal = () => {
    setSelectedPost(null);
  };

  const openCommentModal = () => {
    setIsCommentModalOpen(true);
  };

  const closeCommentModal = () => {
    setIsCommentModalOpen(false);
  };

  return (
    <div className="min-h-screen background-dark text-gray-100">
      <header className="block-background-color text-white p-4 flex justify-between items-center w-full">
        <div className="flex items-center">
          <img src={cuhklogo} className="h-16 p-1 ml-8 mr-8" alt="logo" />
          <p className="custom-purple font-bold text-4xl mr-auto">CUHK Forum</p>
        </div>
        <div className="relative w-1/2 flex justify-center">
          <label class="input input-bordered w-full flex items-center gap-2">
            <input type="text" class="grow" placeholder="Type here to search..." />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="h-4 w-4 opacity-70">
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd" />
            </svg>
          </label>
        </div>
        <div className="flex items-center space-x-8 ml-8">
          <button className="btn h-14 w-14 flex items-center justify-center rounded-lg bg-gray-400">
            <Message className="h-10 w-10" alt="Message" />
          </button>
          <button className="btn h-14 w-14 flex items-center justify-center rounded-lg bg-gray-400">
            <Message className="h-10 w-10" alt="Message" />
          </button>
          <button className="btn h-14 w-14 flex items-center justify-center rounded-lg bg-gray-400">
            <Notification className="h-10 w-10" alt="Notification" />
          </button>
          <button className="btn h-14 w-24 custom-purple-bg text-white text-xl" onClick={toggleLoginModal}>Login</button>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-4 flex justify-between gap-20 mx-auto ">
        {/* Left Sidebar */}
        <div className="w-1/6 text-xl mt-12 ml-24">
          <div className="block-background-color rounded-2xl p-8 mb-20">
            <div className="flex items-center space-x-2 mb-6">
              <img src={UserIcon} alt="User Icon" className="w-12 h-12" />
              <div>
                <p className="font-bold">Nickname</p>
                <p className="text-gray">----</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="font-bold">Major</p>
                <p className="text-gray">----</p>
              </div>
              <div>
                <p className="font-bold">College</p>
                <p className="text-gray">----</p>
              </div>
              <div>
                <p className="font-bold">Year of Admission</p>
                <p className="text-gray">----</p>
              </div>
            </div>
          </div>

          {/* Hot Topics */}
          <div className="block-background-color rounded-2xl p-8">
            <h2 className="font-bold text-3xl mb-12">Hot Topics</h2>
            <div className="space-y-6">
              <div>
                <p className="">New Asia College</p>
                <p className="text-gray">344 Posted</p>
              </div>
              <div>
                <p className="">Information Engineering</p>
                <p className="text-gray">556 Posted</p>
              </div>
              <div>
                <p className="">Faculty of Engineering</p>
                <p className="text-gray">1,402 Posted</p>
              </div>
              <div>
                <p className="">CUHK</p>
                <p className="text-gray">3,029 Posted</p>
              </div>
              <div>
                <p className="">FYP</p>
                <p className="text-gray">2,032</p>
              </div>
              <div>
                <p className="">General Education</p>
                <p className="text-gray">2,645 Posted</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="text-xl w-4/6">
          {posts.map((post, index) => (
            <div key={index} className="block-background-color rounded-2xl p-8 my-12 h-64 relative cursor-pointer" onClick={() => handlePostClick(post)}>
              <p className="font-bold mb-4">{post.title}</p>
              <p className="text-gray mb-4">{post.content}</p>
              <p className="text-gray-400 absolute bottom-8 right-8">Posted by {post.author}</p>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="w-1/6 mr-24">
          <div className="block-background-color rounded-2xl p-4 mt-12 text-xl">
            <div className="space-y-6">
              <div>
                <p className="font-bold">Your Posts</p>
                <p className="text-gray">0</p>
              </div>
              <div>
                <p className="font-bold">Received Comments</p>
                <p className="text-gray">0</p>
              </div>
              <div>
                <p className="font-bold">Received Upvotes</p>
                <p className="text-gray">0</p>
              </div>
              <button className="w-full bar-background-color py-2 rounded-lg" onClick={toggleNewPostModal}>
                New Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={toggleLoginModal}>
        <LoginModalContent />
      </LoginModal>

      {/* New Post Modal */}
      {isNewPostModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal modal-open">
            <div className="modal-box w-11/12 max-w-5xl">
              <h2 className="font-bold text-2xl mb-4">New Post</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Title</label>
                <input type="text" className="input input-bordered w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Content</label>
                <textarea className="textarea textarea-bordered w-full h-40"></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button className="btn" onClick={toggleNewPostModal}>Cancel</button>
                <button className="btn btn-outline">Discard</button>
                <button className="btn btn-success">Post</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Post Modal */}
      {selectedPost && (
        <PostModal post={selectedPost} onClose={closePostModal} onComment={openCommentModal} />
      )}

      {/* Comment Modal */}
      {isCommentModalOpen && (
        <CommentModal onClose={closeCommentModal} />
      )}
    </div>
  );
}

export default App;



