import styles from '@/style_modules/tools.module.css'

export default function SearchBar(params:any)
{
    let useSearch = params.useSearch;
    let searchKeyHandler = params.searchKeyHandler

    return (
        <div>
            <input className={styles.input} type="text" onKeyDown={searchKeyHandler} onChange={event => useSearch(event.target.value)}/>
        </div>
    )
}