import './App.css';
import cuhklogo from './icons/cuhklogo.png';
import { ReactComponent as ConnectButton } from './icons/Connect Button.svg';
import { ReactComponent as Home } from './icons/Home.svg';
import { ReactComponent as Message } from './icons/Message.svg';
import { ReactComponent as Notification } from './icons/Notification.svg';
import { ReactComponent as Search } from './icons/Search.svg';
// import { ReactComponent as UserIcon } from './icons/UserIcon.svg';
import UserIcon from './icons/UserIcon.png';

function App() {
  return (
    <div className="App background-dark">
      <header className="background-color text-white p-4 flex justify-between items-center w-full">
        <div className="flex items-center">
          <img src={cuhklogo} className="h-16 p-1 ml-8 mr-8" alt="logo" />
          <p className="custom-purple font-bold text-4xl mr-auto">CUHK Forum</p>
        </div>
        <div className="relative w-1/2 flex justify-center">
          <input
            type="text"
            placeholder="Type here to search..."
            className="searchbar p-4 pl-10 rounded-xl text-xl h-14 w-full"
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
      <main className="main-dark grid grid-cols-3 gap-4 ;">
        <div>
          <div className="flex items-center p-4 ml-28 background-color m-40 rounded-2xl">
            <div className="flex flex-row items-start">
              <img src={UserIcon} className="h-16 p-1 ml-8 mr-8" alt="UserIcon" />
              <div className="flex flex-col items-start">
                <p className="text-gray text-xl font-bold">Nickname</p>
                <p className="text-xl">----</p>
              </div>
            </div>
          </div>
        </div>
        <div> center</div>
        <div> right</div>
      </main>
    </div>
  );
}

export default App;