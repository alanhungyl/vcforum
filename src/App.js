import './App.css';
import cuhklogo from './icons/cuhklogo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-blue-500 text-white p-4">
        <img src={cuhklogo} className="App-logo h-30" alt="logo" />
        <p className="custom-purple font-bold">CUHK Forum</p>
      </header>
      <p>Test B.</p>
    </div>
  );
}

export default App;
