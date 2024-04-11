import styles from '@/style_modules/footer/footer.module.css'
import Link from 'next/link'

export default function Footer()
{

    return (
        <div className={styles.footer}>
            <div className={styles.main}>
            <p>Website was build with <a href="https://nextjs.org/" target='_blank'>NextJs</a></p>
            <Link href="impressum">Impressum</Link>
            </div>
        </div>
    )
}