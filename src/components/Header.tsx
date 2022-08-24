import './header.css';
import { userProps } from '../utils/interface';
import { useState } from 'react';

type Props = {
  user: userProps;
  displayTodos: () => void;
  show: boolean;
};

function Header({ user, displayTodos, show }: Props) {
  const [displayInfo, setDisplayInfo] = useState<boolean>(false);

  return (
    <div className="header">
      <h1>{user?.name}</h1>
      {displayInfo ? (
        <div>
          <p>Address:</p>
          <p>Street: {user?.address.street}</p>
          <p>City: {user?.address.city}</p>
          <p>Zipcode: {user?.address.zipcode}</p>
        </div>
      ) : (
        <div>
          <p>Username: {user?.username}</p>
          <p>Email: {user?.email}</p>
          <p>phone: {user?.phone}</p>
          <p>Website: {user?.website}</p>
          <p>Company: {user?.company.name}</p>
        </div>
      )}
      <div className="userInfoBtnWrapper">
        <button
          className="headerBtn"
          onClick={() => setDisplayInfo(!displayInfo)}
        >
          {displayInfo ? 'Back' : 'More'}
        </button>
      </div>
      <div className="todosBtnWrapper">
        <button className="headerBtn" onClick={() => displayTodos()}>
          {show ? 'POSTS' : 'TODOS'}
        </button>
      </div>
    </div>
  );
}

export default Header;
