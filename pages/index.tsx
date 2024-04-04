import Skills from '@/components/skill/skills';
import styles from '@/style_modules/home/about.module.css'

export default function Home(props:any) {

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

export async function getServerSideProps(test:any)
{
  const skills = await fetch(process.env.NEXTAUTH_URL+'/api/skills').then(x => { return x.json() })
  return {
    props: {
      skills
    }
  }
}

