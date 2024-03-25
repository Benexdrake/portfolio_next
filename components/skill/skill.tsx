import styles from '@/style_modules/home/skill.module.css'

export default function Skill(props:any)
{
    const skill = props.skill

    return (
        <div className={styles.skill}>
            <div className={styles.skill_wrap}>
                <div className={styles.image}>
                    <img src={'./icons/'+skill.icon} alt="" />
                </div>
                <div>
                    <div className={styles.skill_header}>
                        <div><p>{skill.title}</p></div>
                        <div><p>{skill.stars * 20} %</p></div>
                    </div>
                    <div><progress className={styles.progress} value={skill.stars*20} max="100"></progress></div>
                </div>
            
            </div>
        </div>
    )
}