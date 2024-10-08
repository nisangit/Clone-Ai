import './App.css';
import Chatscreen from './components/Chatscreen/Chatscreen';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
       <Header/>
       <Sidebar/>
       <Chatscreen/>
    </div>
  );
}

export default App;
