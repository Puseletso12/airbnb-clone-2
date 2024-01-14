import './App.css';
import Header from './components/layout/Header';
import Home from "./components/Home";

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Home />
      {/* 
      Home Page
        Header
      
      Banner
        Search

      Card

      Footer

      Search Page
        Header
      */}
    </div>
  );
}

export default App;
