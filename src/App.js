import './App.css';
import MyAppBar from './components/MyAppBar';
import Carddata from './components/Carddata';
import BasicList from './components/BasicList';
import Subtitle from './components/Subtitle';


function App() {
  return (
    <div className="App">
      <Subtitle />
      {/* <header className="App-header">
      </header> */}
      <MyAppBar />
     <Carddata />
     <BasicList />
    </div>
  );
}

export default App;
