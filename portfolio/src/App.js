import './App.css';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import About from './components/about/About';
import Header from './components/header/Header';

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
