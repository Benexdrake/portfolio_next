import styles from '@/style_modules/chat/chat.module.css'
import { User } from '@/types/chat/user';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MessageBlock(param:any)
{

    let message = param.message

    let [user, setUser] = useState<User>()
    useEffect(() => {
        const fetchUser = async () => {
            let u = await axios.get('http://localhost:3000/api/discord/getUser?id='+ message.userId).then(x => {return x.data})
            console.log(u)
            setUser(u)
            if(u)
                return;
        }

        fetchUser();
    }, [])

    return (
        <div className={styles.message} key={message.id}>
        <div className={styles.image_block}>
            <img className={styles.image} src={user?.avatar} alt="" />
        </div>
        <div>
            <div className={styles.message_header}>
                <p className={styles.username}>{user?.name}</p>
                <p className={styles.date}>{new Date(message.date).toDateString()}</p>
            </div>
            <div className={styles.content}>
                <p>{message.content}</p>
            </div>
        </div>
    </div>
    )
}