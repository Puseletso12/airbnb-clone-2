import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SearchPage from "./components/SearchPage";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path='/search'>
            <SearchPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
