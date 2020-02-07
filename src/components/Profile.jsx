import React from 'react';
import prof from './Profile.module.css';

const Profile = () => {
  return (
    <div className={prof.content}>
      <div>
        <img src='https://media.proglib.io/wp-uploads/2017/05/reactjs-1024x512.png' />
      </div>
      <div>
        ava + description
        </div>
      <div>
        my posts
          <div>
          New post
          </div>
        <div className={prof.posts}>

          <div className={prof.item}>
            post 1
          </div>

          <div className={prof.item}>
            post 2
          </div>

        </div>
      </div>

    </div>
  )
};

export default Profile;