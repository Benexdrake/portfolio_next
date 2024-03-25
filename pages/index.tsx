import WhatIDo from '@/components/home/whatido';
import Skills from '@/components/skill/skills';
import styles from '@/style_modules/home/about.module.css'

export default function Home(props:any) {
  const about = props.about;
  const skills = props.skills
  return (
    <>
      <h1 className={styles.title}>About</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro enim consequuntur beatae iure incidunt minima dolorem? Aspernatur maiores eum velit enim hic obcaecati iste odit facere ipsa. Dolor, qui.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro enim consequuntur beatae iure incidunt minima dolorem? Aspernatur maiores eum velit enim hic obcaecati iste odit facere ipsa. Dolor, qui.</p>

      <div className={styles.whatido}>
        {about.ido.map((x:any) => {return (
          <WhatIDo styles={styles} title={x.title} content={x.content}/>
        )})}
        <Skills skills={skills}/>
      </div>
    </>
  );
}

export async function getServerSideProps()
{
  const about = await fetch('http://localhost:3000/api/about').then(x => {return x.json()})
  const skills = await fetch('http://localhost:3000/api/skills').then(x => { return x.json() })
  return {
    props: {
      about,skills
    }
  }
}

