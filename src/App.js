import './App.css';
import MyAppBar from './components/MyAppBar';
import Carddata from './components/Carddata';
import {BasicList} from './components/BasicList';
import Subtitle from './components/Subtitle';
import Geetha from './components/bagavadgeetha/Geetha';


function App() {
  return (
    <div className="App">
      <Subtitle />
      {/* <header className="App-header">
      </header> */}
      <MyAppBar />
     <Carddata />
     <BasicList />
     <Geetha />
    </div>
  );
}

export default App;
