import styles from '@/style_modules/home/about.module.css'

export default function Home(props:any) {
  const about = props.about;
  return (
    <>
      <h1 className={styles.title}>About</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro enim consequuntur beatae iure incidunt minima dolorem? Aspernatur maiores eum velit enim hic obcaecati iste odit facere ipsa. Dolor, qui.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro enim consequuntur beatae iure incidunt minima dolorem? Aspernatur maiores eum velit enim hic obcaecati iste odit facere ipsa. Dolor, qui.</p>

      <div className={styles.whatido}>
        {about.ido.map((x:any) => {return (
          
          <div className={styles.ido}>
          <h3 className={styles.ido_title}>{x.title}</h3>
          <p className={styles.ido_content}>{x.content.slice(0,220)+'...'}</p>
          </div>
        )})}
        
      </div>
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

