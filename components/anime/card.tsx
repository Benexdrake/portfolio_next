import { getStars } from "@/lib/helper";
import { Anime } from "@/types/anime";
import Link from 'next/link'

import styles from '@/style_modules/crunchyroll/card/index.module.css'

export default function AnimeCard(props:any)
{
    const anime = props.anime as Anime;
    return (
        <Link href={anime.url} target="_blank" key={anime._id}>
            <div className={styles.card}>
                <div className={styles.inner}>
                    <div className={styles.front} style={{ backgroundImage: `url("${anime.imageUrl}")`, backgroundSize: 'cover' }}>
                    
                    </div>
                </div>
            </div>
        </Link>
    )
}