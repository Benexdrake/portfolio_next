import ProjectCard from '@/components/project/projectCard'
import styles from '@/style_modules/project/index.module.css'


export default function _()
{
    return (
        <div>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.row}>
            <ProjectCard image="crunchyroll.png" description="Crunchyroll Animes" route="projects/crunchyroll"/>
            <ProjectCard image="pokemon.jpg" title = "" description="Pokedex" route="/"/>
            <ProjectCard image="github.png" title = "" description="All Github Repositories" route="projects/github"/>
            <ProjectCard image="projects.webp" title = "" description="Discord Bots" route="/"/>
            <ProjectCard image="projects.webp" title = "" description="Web Scrapers" route="/"/>
            <ProjectCard image="projects.webp" title = "" description="Portfolio Websites" route="/"/>
            <ProjectCard image="projects.webp" title = "" description="Web APIs" route="/"/>
        </div>
        </div>
    )
}