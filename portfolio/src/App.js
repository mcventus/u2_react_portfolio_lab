import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/> 
        <Main/>
        {/* <Footer/> */}
      </header>
    </div>
  );
}

export default App;
