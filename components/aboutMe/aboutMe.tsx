import styles from '@/style_modules/home/aboutMe.module.css'
import { useEffect, useState } from 'react';


export default function AboutMe(props:any) {
  const [aboutMe, setAboutMe]:any = useState(null);

  useEffect(() => {
    const fetchAboutMe = async () => {
      let a = await fetch('http://localhost:3000/api/aboutMe').then(x => {return x.json()})
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
                <h1>{aboutMe.aboutMe.name}</h1>
              </div>
              <div className={styles.aboutMe_status}>
                <p>Fullstack Softwareentwickler</p>
              </div>
                <ul className={styles.icons}>
                  <li className={styles.icon}><i className="fa-brands fa-github"></i></li>
                  <li className={styles.icon}><i className="fa-brands fa-linkedin"></i></li>
                  <li className={styles.icon}><i className="fa-solid fa-globe"></i></li>
                </ul>
                <div className={styles.info}>
                  <div style={{width:'50px', textAlign:'center'}}>
                        <div className={styles.icon}><i className="fa-solid fa-phone"></i></div>
                  </div>
                        <div>
                            <p className={styles.info_title}>Phone</p>
                            <p>+49 123456</p>
                        </div>
                </div>
                <div className={styles.info}>
                  <div style={{width:'50px', textAlign:'center'}}>
                        <div className={styles.icon}><i className="fa-solid fa-envelope"></i></div>
                  </div>
                        <div>
                            <p className={styles.info_title}>E-Mail</p>
                            <p>Benrichter@live.de</p>
                        </div>
                </div>
                <div className={styles.info}>
                  <div style={{width:'50px', textAlign:'center'}}>
                        <div className={styles.icon}><i className="fa-solid fa-location-dot"></i></div>
                  </div>
                        <div>
                            <p className={styles.info_title}>Location</p>
                            <p>Germany, Düsseldorf</p>
                        </div>
                </div>

                <div className={styles.info}>
                  <div style={{width:'50px', textAlign:'center'}}>
                        <div className={styles.icon}><i className="fa-solid fa-language"></i></div>
                  </div>
                        <div>
                            <p className={styles.info_title}>Language</p>
                            <p>German, English</p>
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