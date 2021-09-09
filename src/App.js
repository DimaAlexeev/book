
import './App.css';
import TopMenu from './topMenu/topMenu';
import Container from './container/container'
import {BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';
import { getBooks, getAuthor } from './store/actions/actionsBook'
import { useDispatch, useSelector} from 'react-redux';
function App() {
  const dispach = useDispatch();
  const author = useSelector(state=>state.author.author)
  useEffect(()=>{
        dispach(getBooks());
        dispach(getAuthor());
  },[])
 
  return (
    <Router>
      <TopMenu/>
      <Container />
    </Router>
  );
}

export default App;
