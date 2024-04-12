import AnimeCard from "@/components/anime/card";
import styles from '@/style_modules/crunchyroll/index.module.css'
import getAnimes from "@/services/crunchyroll/get_animes";
import getAnimesByName from "@/services/crunchyroll/get_animes_by_name";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SearchBar from "@/components/tools/searchbar";

export default function Crunchyroll(props: any) {
    let animes = props.animes;
    let length = props.length
    
    const router = useRouter();
    
    let [search, useSearch] = useState('')
    let [page, usePage] = useState(1)
    
    let pagesConvert = (length:number) => 
    {
        if(length % 20 === 0)
            return length / 20;
        else        
            return length / 20 + 1;
    }
    let pages = pagesConvert(length);
    console.log(parseInt(pages.toString()))

    let searchKeyHandler = (e:any) => 
    {
        if(e.key === 'Enter')
        {
            if(search === '')
                router.push(`/projects/crunchyroll`)
            else
                router.push(`/projects/crunchyroll?page=1&name=${search}`)
        }
    }

    return (
        <>
            <h1 className={styles.title}>Crunchyroll - {length} Animes</h1>
            <SearchBar useSearch={useSearch} searchKeyHandler={searchKeyHandler}/>
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

    let get;

    if(name)
        get = await getAnimesByName('http://'+ctx.req.headers.host, page,name);
    else
        get = await getAnimes('http://'+ctx.req.headers.host, page);

    return {
        props: {
            length:get.length,animes:get.animes
         }
    }
}