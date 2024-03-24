import styles from '@/style_modules/home/resume.module.css'

export default function Resume(props: any) {
    const resume = props.resume;
    console.log(resume)
    return (
        <>
            <h1 className={styles.title}>Resume</h1>
            <div className={styles.resume}>
                <div>
                    <h3 className={styles.resume_title}><i className="fa-solid fa-school"></i> Education</h3>
                    {resume.map((x: any) => {
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
                    {resume.map((x: any) => {
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
            <div className={styles.resume}>
                <div className={styles.resume_block}>
                    <h3 className={styles.working_title}>Working Skills</h3>
                    <div className={styles.progress_block}>
                        <h5>Testen</h5>
                        50% <progress className={styles.progress} value="50" max="100"></progress>
                    </div>
                    <div className={styles.progress_block}>
                        <h5>Testen</h5>
                        50% <progress className={styles.progress} value="50" max="100"></progress>
                    </div>
                    <div className={styles.progress_block}>
                        <h5>Testen</h5>
                        50% <progress className={styles.progress} value="50" max="100"></progress>
                    </div>
                    <div className={styles.progress_block}>
                        <h5>Testen</h5>
                        50% <progress className={styles.progress} value="50" max="100"></progress>
                    </div>
                    
                </div>

                <div className={styles.resume_block}>asdads</div>
                
            </div>



        </>
    );
}

export async function getServerSideProps() {
    const resume = await fetch('http://localhost:3000/api/resume').then(x => { return x.json() })
    return {
        props: {
            resume
        }
    }
}

