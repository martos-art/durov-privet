import React from 'react';
import style from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                avatarUrl: 'https://ic.pics.livejournal.com/imit_omsu/66140468/454967/454967_800.jpg',
                followed: true,
                fullName: 'Anna',
                status: 'Uchis davay!!!!!!!!!!!!!!!!!',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                avatarUrl: 'https://sun9-45.userapi.com/c847020/v847020977/1df81/fz46D74JsRQ.jpg?ava=1',
                followed: false,
                fullName: 'MAMA',
                status: 'Kogda uje na rabotu?',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 3,
                avatarUrl: 'https://cs5.pikabu.ru/images/big_size_comm/2015-04_1/1428229475636.jpg',
                followed: false,
                fullName: 'PAPA',
                status: 'Mojet dalnoboishikom stanesh?',
                location: {city: 'Minsk', country: 'Belarus'}
            }
        ])
    }

    return (
        <div>
            {
                props.users.map((u) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.avatarUrl} className={style.avatar}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => props.unfollow(u.id)}> Unfollow </button>
                            : <button onClick={() => props.follow(u.id)}> Follow </button>}
                    </div>
                </span>

                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    )
};

export default Users;