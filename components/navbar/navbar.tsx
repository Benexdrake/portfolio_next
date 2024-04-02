import Link from "next/link";
import {signIn, signOut, useSession} from 'next-auth/react'

import style from '@/style_modules/navbar.module.css'

export default function Navbar()
{
    const {data:session} = useSession();
    return (
        <nav className={style.navbar_body}>
            <div className={style.navbar_links}>
                <ul>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/resume">Resume</Link></li>
                    <li><Link href="projects">Projects</Link></li>
                    <li><Link href="chat">Chat</Link></li>
                    <li><Link href="impressum">Impressum</Link></li>
                    {session && (
                        <li><Link href="admin">Admin</Link></li>
                    )}
                </ul>
            </div>
            { !session && 
          <>
            <button className={style.button} onClick={() => signIn('discord')}>Sign In</button>
          </>
        }

        { session && 
          <>
            <button  className={style.button} onClick={() => signOut()}>Sign Out</button>
          </> 
        }
    </nav>
    )
}