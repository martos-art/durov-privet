import React from 'react';
import profInf from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>

      <div>
        <img src='https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/05/Gradient-Roundup-Illustrator-02.jpg' />
        
      </div>
      <div className={profInf.descriptionBlock}>
        ava + description

  
      </div>

    </div>
  )
};

export default ProfileInfo;