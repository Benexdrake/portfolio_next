import styles from '@/style_modules/chat/chat.module.css'

export default function MessageBlock(param:any)
{
    let message = param.message

    return (
        <div className={styles.message} key={message.id}>
        <div className={styles.image_block}>
            <img className={styles.image} src={message.avatarUrl} alt="" />
        </div>
        <div>
            <div className={styles.message_header}>
                <p className={styles.username}>{message.username}</p>
                <p className={styles.date}>{new Date(message.date).toDateString()}</p>
            </div>
            <div className={styles.content}>
                <p>{message.content}</p>
            </div>
        </div>
    </div>
    )
}