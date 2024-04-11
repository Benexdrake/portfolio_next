import axios from "axios";

export default async function getAnimes(path:string, page:number)
{
    const animes = await axios.get(path+'/api/crunchyroll/animes?page='+ page).then(x => {return x.data});
    return animes;
}