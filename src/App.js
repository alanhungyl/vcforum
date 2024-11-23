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
    <div className="min-h-screen background-dark text-gray-100">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center w-full fixed top-0 left-0 z-50">
        <div className="flex items-center">
          <img src={cuhklogo} className="h-16 p-1 ml-8 mr-8" alt="logo" />
          <p className="custom-purple font-bold text-4xl mr-auto">CUHK Forum</p>
        </div>
        <div className="relative w-1/2 flex justify-center">
          <input
            type="text"
            placeholder="Type here to search..."
            className="bar-background-color p-4 pl-10 rounded-xl text-xl h-14 w-full"
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
      <div className="p-4 flex justify-between gap-20 mx-auto my-24 ">
        {/* Left Sidebar */}
        <div className="w-1/6 text-xl mt-12 ml-24 fixed top-24 left-0 h-full">
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
        <div className="text-xl w-1/2 mx-auto my-12">
          {/* Posts */}
          <div className="block-background-color rounded-2xl p-8 h-64 relative">
            <p className="font-bold mb-4">Dummy Title 1</p>
            <p className="text-gray mb-4">Dummy Content</p>
            <p className="text-gray-400 absolute bottom-8 right-8">Posted by Test</p>
          </div>

          <div className="block-background-color rounded-2xl p-8 my-12 h-64 relative">
            <p className="font-bold mb-4">I love CUHK</p>
            <p className="text-gray mb-4">
              Founded in 1963, The Chinese University of Hong Kong (CUHK) is a forward-looking comprehensive research university with a global vision and a mission to combine tradition with modernity, and to bring together China and the West. CUHK teachers and students hail from all around the world. CUHK graduates are connected worldwide through an extensive alumni network.`
            </p>
            <p className="text-gray-400 absolute bottom-8 right-8">Posted by CUHK Lover</p>
          </div>

          <div className="block-background-color rounded-2xl p-8 my-12 h-64 relative">
            <p className="font-bold mb-4">I love IERG</p>
            <p className="text-gray mb-4">
              In this ever-changing information-centric world, data has enormous hidden value, which can be unlocked by advanced engineering techniques to create an impact on society.
              Through data generation and measurement, data transmission and networking to connect people and objects, coupled with advanced data processing and analytics, data can be enhanced into forward-looking information and predictions. Together with the added value of network security, we can realize many useful Internet and artificial intelligence applications, and achieve the goal of a smart world.
            </p>
            <p className="text-gray-400 absolute bottom-8 right-8">Posted by IERG Lover</p>
          </div>

          <div className="block-background-color rounded-2xl p-8 my-12 h-64 relative">
            <p className="font-bold mb-4">Dummy Title 2</p>
            <p className="text-gray mb-4">Content ...</p>
            <p className="text-gray-400 absolute bottom-8 right-8">Posted by XXXX</p>
          </div>

          <div className="block-background-color rounded-2xl p-8 my-12 h-64 relative">
            <p className="font-bold mb-4">Dummy Title 3</p>
            <p className="text-gray mb-4">Content ...</p>
            <p className="text-gray-400 absolute bottom-8 right-8">Posted by XXXX</p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/6 mr-24 fixed top-24 right-0 h-full overflow-y-auto">
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
              <button className="w-full bar-background-color py-2 rounded-lg">
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