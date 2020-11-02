import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import ViewPosts from './Components/ViewPosts';
import Post from './Components/Post';

function App() {
  return (
   <Switch>
     <Route exact path="/" component={ViewPosts} />
     <Route path="/post/:postId" component={Post} />
   </Switch>
  );
}

export default App;
