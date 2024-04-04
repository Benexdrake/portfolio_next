import WhatIDo from '@/components/home/whatido';
import Skills from '@/components/skill/skills';
import styles from '@/style_modules/home/about.module.css'

export default function Home(props:any) {
  const about = props.about;
  const skills = props.skills
  return (
    <>
      <h1 className={styles.title}>About</h1>
      <p className={styles.text}>
      Ich bin eine motivierte und vielseitige Person, stets bereit, neue Herausforderungen anzunehmen. Mit Leidenschaft für das Lernen bin ich bestrebt, qualitativ hochwertige Ergebnisse zu liefern. Mit einer positiven Einstellung und einem Wachstumsdenken bin ich bereit, einen bedeutenden Beitrag zu leisten und Großes zu erreichen
      </p>
        <Skills skills={skills}/>
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

