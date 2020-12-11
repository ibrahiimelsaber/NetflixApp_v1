import "./App.css";
import { React, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Netflix-components/header-component";
import Footer from "./components/Netflix-components/footer-component";
import Home from "./components/Netflix-components/home-component";
import Adding from "./components/Netflix-components/add-movie-component";
import Updating from "./components/Netflix-components/update-movie-component";
import Deleting from "./components/Netflix-components/delete-movie-component";
import Movies from "./components/Netflix-components/movies-component";
import Blog from "./components/Netflix-components/blog-component";
import Hooks from "./components/Netflix-components/hooks-component";
import BlogWithHooks from "./components/Netflix-components/blog-hooks-component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route component={Home} path="/" exact />
          <Route component={Movies} path="/movies" exact />
          <Route component={Updating} path="/updateMovie" exact />
          <Route component={Adding} path="/addMovie" exact />
          <Route component={Deleting} path="/deleteMovie" exact />
          <Route component={Blog} path="/blog" exact />
          <Route component={BlogWithHooks} path="/blogHooks" exact />
          <Route component={Hooks} path="/hooks" exact />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
