import axios from "axios";

export default async function getInfo(path:string)
{
    const info = await axios.get(path+'/api/info').then(x => {return x.data});
    return info;
}