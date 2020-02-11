import React from 'react';
import prof from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div className={prof.content}>
      <div>
        <img src='https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/05/Gradient-Roundup-Illustrator-02.jpg' />
      </div>
      <div>
        ava + description
        </div>

      <MyPosts />


    </div>
  )
};

export default Profile;