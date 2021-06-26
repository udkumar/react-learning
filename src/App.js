
import Navbar from './components/Navbar';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';

function App() {
  // const title = "Welcome to my blog";
  // const likes = 50;
  // const person = {name: "uday", like: "yes"}
  // const links = "https://google.com";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <Home /> */}
          <Switch>
            <Route exact path="/"> 
              <Home />
            </Route>
            <Route path="/create"> 
              <Create />
            </Route>
            <Route path="/blogs/:id"> 
              <BlogDetails />
            </Route>
          </Switch>
          {/* <h1>{title}</h1>
          <p>Liked {likes} times</p>
          <p>{person.name}</p>
          <p>{"string print"}</p>
          <p>{ 20 }</p>
          <p>{[1,2,3,4]}</p>
          <a href={links}>Google site!</a> */}
        </div>
      </div>
      </Router>
  );
}

export default App;
