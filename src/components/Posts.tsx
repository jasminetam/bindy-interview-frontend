import './posts.css';
import { postsProps } from '../utils/interface';

type Props = {
  post: postsProps;
};

function Posts({ post }: Props) {
  return (
    <div>
      <div className="posts">
        <h1>
          <span>{post.id}.</span> {post.title}
        </h1>
        <p>{post.body}</p>
        <hr />
      </div>
    </div>
  );
}

export default Posts;
