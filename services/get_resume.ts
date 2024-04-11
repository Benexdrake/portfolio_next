import axios from "axios";

export default async function getResume(path:string)
{
    const info = await axios.get(path+'/api/resume').then(x => {return x.data});
    return info;
}