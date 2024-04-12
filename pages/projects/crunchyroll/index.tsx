import AnimeCard from "@/components/anime/card";
import styles from '@/style_modules/crunchyroll/index.module.css'
import getAnimes from "@/services/crunchyroll/get_animes";
import getAnimesByName from "@/services/crunchyroll/get_animes_by_name";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Crunchyroll(props: any) {
    let animes = props.animes;

    const router = useRouter();

    let [search, useSearch] = useState('')
    let [page, usePage] = useState(1)

    let searchKeyHandler = (e:any) => 
    {
        if(e.key === 'Enter')
        {
            router.push(`/projects/crunchyroll?page=1&name=${search}`)
        }
    }

    return (
        <>
            <h1 className={styles.title}>Crunchyroll</h1>
            <input className={styles.input} type="text" onKeyDown={searchKeyHandler} onChange={event => useSearch(event.target.value)}/>
            <div className={styles.cards}>
                {animes.map((x: any) => { return <AnimeCard anime={x} /> })}
            </div>
            <p style={{textAlign:'center', fontSize:'2rem'}}>{'< 1 2 3 4 5 6 7 8 9 >'}</p>
        </>
    )
}

export async function getServerSideProps(ctx:any) {
    const page = ctx.query.page;
    const name = ctx.query.name;

    let animes = [];

    if(name)
        animes = await getAnimesByName('http://'+ctx.req.headers.host, page,name);
    else
        animes = await getAnimes('http://'+ctx.req.headers.host, page);

    return {
        props: { animes }
    }
}