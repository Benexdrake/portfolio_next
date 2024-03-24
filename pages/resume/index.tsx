import styles from '@/style_modules/home/about.module.css'

export default function Resume(props:any) {
  const about = props.about;
  return (
    <>
      <h1 className={styles.title}>Resume</h1>
      
    
    </>
  );
}

export async function getServerSideProps()
{
  const about = await fetch('http://localhost:3000/api/about').then(x => {return x.json()})
  return {
    props: {
      about:about
    }
  }
}

