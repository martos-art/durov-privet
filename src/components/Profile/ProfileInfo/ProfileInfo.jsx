import React from 'react';
import profInf from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader.";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                {/*<img src='https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/05/Gradient-Roundup-Illustrator-02.jpg' />*/}
            </div>
            <div className={profInf.descriptionBlock}>
                <img src={props.profile.photos.large}/>

                <div className={profInf.fullName}> {props.profile.fullName} </div>

                <span className={profInf.aboutMe}>Обо мне:</span>
                <div>{props.profile.aboutMe}</div>

                <span className={profInf.aboutMe}>Контакты:</span>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.contacts.twitter}</div>
                <div>{props.profile.contacts.instagram}</div>
                <div>{props.profile.contacts.github}</div>

            </div>
        </div>
    )
};
export default ProfileInfo;