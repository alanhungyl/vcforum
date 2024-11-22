import cuhklogo from './icons/cuhklogo.png';
import { ReactComponent as ConnectButton } from './icons/Connect Button.svg';
import { ReactComponent as Home } from './icons/Home.svg';
import { ReactComponent as Message } from './icons/Message.svg';
import { ReactComponent as Notification } from './icons/Notification.svg';
import { ReactComponent as Search } from './icons/Search.svg';
import UserIcon from './icons/UserIcon.png';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center w-full">
        <div className="flex items-center">
          <img src={cuhklogo} className="h-16 p-1 ml-8 mr-8" alt="logo" />
          <p className="custom-purple font-bold text-4xl mr-auto">CUHK Forum</p>
        </div>
        <div className="relative w-1/2 flex justify-center">
          <input
            type="text"
            placeholder="Type here to search..."
            className="bg-gray-700 p-4 pl-10 rounded-xl text-xl h-14 w-full"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6" alt="Search" />
        </div>
        <div className="flex items-center space-x-8 ml-8">
          <Home className="h-14 w-14" alt="Home" />
          <Message className="h-14 w-14" alt="Message" />
          <Notification className="h-14 w-14" alt="Notification" />
          <ConnectButton className="h-14 w-36" alt="ConnectButton" />
        </div>
      </header>

      {/* Main Content */}
      <div className="container p-4 flex justify-between gap-20 mx-auto w-full">
        {/* Left Sidebar */}
        <div className="w-1/4 text-xl mt-12">
          <div className="bg-gray-800 rounded-2xl p-8 mb-20">
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
          <div className="bg-gray-800 rounded-2xl p-8">
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
        <div className="text-xl w-full">
          {/* Posts */}
          <div className="bg-gray-800 rounded-2xl p-8 my-12">
            <p className="font-bold mb-4">Title</p>
            <p className="text-gray-300 mb-4">Content ...</p>
            <p className="text-right text-gray-400">Posted by XXXX</p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 my-12">
            <p className="font-bold mb-4">Title</p>
            <p className="text-gray-300 mb-4">Content ...</p>
            <p className="text-right text-gray-400">Posted by XXXX</p>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-8 my-12">
            <p className="font-bold mb-4">Title</p>
            <p className="text-gray-300 mb-4">Content ...</p>
            <p className="text-right text-gray-400">Posted by XXXX</p>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-8 my-12">
            <p className="font-bold mb-4">Title</p>
            <p className="text-gray-300 mb-4">Content ...</p>
            <p className="text-right text-gray-400">Posted by XXXX</p>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-8 my-12">
            <p className="font-bold mb-4">Title</p>
            <p className="text-gray-300 mb-4">Content ...</p>
            <p className="text-right text-gray-400">Posted by XXXX</p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/4">
          <div className="bg-gray-800 rounded-2xl p-4">
            <div className="space-y-4">
              <div>
                <p className="text-gray-400">Your Posts</p>
                <p className="font-bold">0</p>
              </div>
              <div>
                <p className="text-gray-400">Received Comments</p>
                <p className="font-bold">0</p>
              </div>
              <div>
                <p className="text-gray-400">Received Upvotes</p>
                <p className="font-bold">0</p>
              </div>
              <button className="w-full bg-gray-700 py-2 rounded-lg">
                Please Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;