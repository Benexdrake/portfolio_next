import styles from '@/style_modules/home/info.module.css'
import { useEffect, useState } from 'react';


export default function AboutMe(props:any) {
  const [aboutMe, setAboutMe]:any = useState(null);

  useEffect(() => {
    const fetchAboutMe = async () => {
      let a = await fetch('/api/info').then(x => {return x.json()})
      setAboutMe(a)
      
    }
    fetchAboutMe();
    return
  },aboutMe)
  
  return (
    <div>
        {aboutMe && (

          <div className={styles.aboutMe}>
            <div className={styles.aboutMe_position}>
              <img className={styles.aboutMe_image} src="./Me.png" alt="" />
              <div className={styles.aboutMe_title}>
                <h1>{aboutMe.name}</h1>
              </div>
              <div className={styles.aboutMe_status}>
                <p>{aboutMe.title}</p>
              </div>
                <ul className={styles.icons}>
                  <li className={styles.icon}><i className="fa-brands fa-github"></i></li>
                  <li className={styles.icon}><i className="fa-brands fa-linkedin"></i></li>
                </ul>
                <div className={styles.info}>
                  <div style={{width:'50px', textAlign:'center'}}>
                        <div className={styles.icon}><i className="fa-solid fa-phone"></i></div>
                  </div>
                        <div>
                            <p className={styles.info_title}>Phone</p>
                            <p>{aboutMe.tel}</p>
                        </div>
                </div>
                <div className={styles.info}>
                  <div style={{width:'50px', textAlign:'center'}}>
                        <div className={styles.icon}><i className="fa-solid fa-envelope"></i></div>
                  </div>
                        <div>
                            <p className={styles.info_title}>E-Mail</p>
                            <a href={'mailto:'+aboutMe.email}>{aboutMe.email}</a>
                        </div>
                </div>
                <div className={styles.info}>
                  <div style={{width:'50px', textAlign:'center'}}>
                        <div className={styles.icon}><i className="fa-solid fa-location-dot"></i></div>
                  </div>
                        <div>
                            <p className={styles.info_title}>Location</p>
                            <p>{aboutMe.location}</p>
                        </div>
                </div>
                <div className={styles.info}>
                  <div style={{width:'50px', textAlign:'center'}}>
                        <div className={styles.icon}><i className="fa-solid fa-language"></i></div>
                  </div>
                        <div>
                            <p className={styles.info_title}>Language</p>
                            <p>{aboutMe.language.join(', ')}</p>
                        </div>
                </div>
                <div className={styles.btn_block}>
                  <a href='/' className={styles.button}>Download CV</a>
                </div>
            </div>
        </div>
      )}
      </div>
    );
  }