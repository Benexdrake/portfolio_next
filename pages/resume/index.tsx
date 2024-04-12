import styles from '@/style_modules/resume.module.css'

export default function Resume(props: any) {
    const resume = props.resume;
    
    return (
        <>
            <h1 className={styles.title}>Resume</h1>
            <div><p className={styles.about}>{resume.about.join('\n')}</p></div>
            <br />
            <br />
            <div className={styles.resume}>
                <div>
                    <h3 className={styles.resume_title}><i className="fa-solid fa-school"></i> Education</h3>
                    {resume.resume.map((x: any) => {
                        if (x.title === 'education')
                            return (
                                <div className={styles.resume_block}>
                                    <p className={styles.resume_block_date}>{x.date}</p>
                                    <p className={styles.resume_block_what}>{x.what}</p>
                                    <p className={styles.resume_block_where}>{x.where}</p>
                                </div>
                            )})}
                </div>
                <div>
                    <h3 className={styles.resume_title}><i className="fa-solid fa-briefcase"></i> Experience</h3>
                    {resume.resume.map((x: any) => {
                        if (x.title === 'experience')
                            return (
                                <div className={styles.resume_block}>
                                    <p className={styles.resume_block_date}>{x.date}</p>
                                    <p className={styles.resume_block_what}>{x.what}</p>
                                    <p className={styles.resume_block_where}>{x.where}</p>
                                </div>
                            )})}
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const resume = await fetch(process.env.NEXTAUTH_URL+'/api/resume').then(x => { return x.json() })
    return {
        props: {
            resume
        }
    }
}

