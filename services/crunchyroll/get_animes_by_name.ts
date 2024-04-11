import axios from "axios";

export default async function getAnimesByName(path:string, page:number, name:string)
{
    const animes = await axios.get(path+'/api/crunchyroll/animes?page='+ page+'&name='+name).then(x => {return x.data});
    return animes;
}