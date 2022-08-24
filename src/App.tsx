import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Posts from './components/Posts';
import Todos from './components/Todos';
import { userProps, postsProps, todosProps } from './utils/interface'


function App() {
  const [user, setUser] = useState<userProps[]>([]);
  const [posts, setPosts] = useState<postsProps[]>([]);
  const [todos, setTodos] = useState<todosProps[]>([]);
  const [show, setShow] = useState<boolean>(false);
 

  useEffect(() => {
    const getUser = async () => {
      const userInfo = await axios.get(
        'https://jsonplaceholder.typicode.com/users/'
      );
      setUser(userInfo.data);
    };
    getUser();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      const postsInfo = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?start=1&_limit=30'
      );
      setPosts(postsInfo.data);
    };
    getPosts();
  }, []);

  useEffect(() => {
    const getTodos = async () => {
      const todosInfo = await axios.get(
        'https://jsonplaceholder.typicode.com/todos?start=1&_limit=30'
      );
      setTodos(todosInfo.data);
    };
    getTodos();
  }, []);

  const displayTodos = () => {
    setShow(!show);
  };

  return (
    <div className="App">
    <Header user={user[0]} displayTodos={displayTodos} show={show} />
    {show
      ? (todos.length > 0 && <Todos todos={todos} />)
      : (posts &&
        posts.map((post, idx) => (
          <div key={idx}>
            <Posts post={post} />
          </div>
        )))}
  </div>
  );
}

export default App;
