import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {

  const title = "welcome to the new blog";
  const likes = 50;
  const link = "http://www.google.com";
  // const person = {name: "youshi", age: 30};
  return (
    <Router>
    <div className="App">
      <Navbar />
      
      <div className="content">
        

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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
       
        <h1>{ title }</h1>
       
      </div>
    </div>
    </Router>
  );
}

export default App;
