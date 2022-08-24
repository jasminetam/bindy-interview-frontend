
export interface userProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
}

export interface postsProps {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface todosProps {
  id: number;
  userId: number;
  completed: boolean;
  title: string;
}
