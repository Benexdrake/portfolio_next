import styles from '@/style_modules/home/skill.module.css'
import Skill from './skill'

export default function Skills(props: any) {
    const skills = props.skills
    const skill_types = skills.map((x: any) => { return x.type })
    const skillsNames: string[] = Array.from(new Set(skill_types))

    return (
        <div>
            {skillsNames.map((value: string) => {
                return (
                    <div className={styles.resume_block} style={{ marginBottom: '20px' }}>
                        <h3 className={styles.working_title}>{value}</h3>
                        <div className={styles.skills}>
                            {skills && skills.map((x: any) => {
                                if (x.type === value)
                                    return (
                                        <Skill skill={x} />
                                    )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}