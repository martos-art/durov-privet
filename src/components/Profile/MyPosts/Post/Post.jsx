import React from 'react';
import prof from './Post.module.css';

const Post = () => {
  return (
    <div className={prof.posts}>
      <div className={prof.item}>
        <img src="https://www.w3schools.com/howto/img_avatar2.png" />
        post 1
            <div>
          <span>Like</span>
        </div>
      </div>
    </div>
  )
};

export default Post;