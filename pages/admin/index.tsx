import {signIn, signOut, useSession} from 'next-auth/react'
import style from '@/style_modules/navbar.module.css'

export default function _()
{
    const {data:session} = useSession();

    if(!session)
    {
        return (
            <div>
            <p>Please Login</p>
            <button className={style.button} onClick={() => signIn()}>SIGNIN</button>
            </div>
        )
    }

    return (
        <div className='container'>
            ADMIN
        </div>
    )
}