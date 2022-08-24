import './header.css';
import { userProps } from '../utils/interface';

type Props = {
  user: userProps;
  displayTodos: () => void;
  show: boolean;
};

function Header({ user, displayTodos, show }: Props) {
  return (
    <div className="header">
      <div>
        <h1>{user?.name}</h1>
        <p>username: {user?.username}</p>
        <p>Email: {user?.email}</p>
        <p>phone: {user?.phone}</p>
        <p>Website: {user?.website}</p>
      </div>
      <div className="btnWrapper">
        <button className="todosBtn" onClick={() => displayTodos()}>
          {show ? "POSTS" : "TODOS"}
        </button>
      </div>
    </div>
  );
}

export default Header;
