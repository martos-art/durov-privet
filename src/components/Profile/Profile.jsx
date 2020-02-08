import React from 'react';
import prof from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div className={prof.content}>
      <div>
        <img src='https://media.proglib.io/wp-uploads/2017/05/reactjs-1024x512.png' />
      </div>
      <div>
        ava + description
        </div>

      <MyPosts />


    </div>
  )
};

export default Profile;