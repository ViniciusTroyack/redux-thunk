import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "./store/modules/user/thunks";

function App() {
  const [comment, setComment] = useState()
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className="App-header">
        <div className='card'>
          {user.comments.map((comment) => <p>{comment}</p>)}
          <input onChange={(e) => setComment(e.target.value)} />
          <button onClick={() => dispatch(addCommentThunk(comment))}>
            new comment
          </button>
        </div>
      </div>
    </div >
  );
}

export default App;
