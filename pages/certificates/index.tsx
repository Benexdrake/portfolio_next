import Card from '@/components/certificate/card';
import fs from 'fs'

import styles from '@/style_modules/certificate/index.module.css'


export default function _(props:any)
{
    let filenames = props.filenames;

    return (
        <>
            <h1 className={styles.title}>Certificates</h1>
            <div className={styles.cards}>

            {filenames.map((x:string) => {
                return (
                    <Card filename={x}/>
                )
            })}
            </div>
        </>
    )
}

export function getServerSideProps()
{
    const filenames = fs.readdirSync('public/assets/certifcates');

    return {
        props: {
            filenames
        }
    }
}