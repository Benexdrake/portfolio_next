import Link from "next/link";
import style from '@/style_modules/navbar.module.css'

export default function Navbar()
{
    return (
        <nav className={style.navbar_body}>
            <div className={style.navbar_links}>
                <ul>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/resume">Resume</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/certificates">Certificates</Link></li>
                </ul>
            </div>
    </nav>
    )
}