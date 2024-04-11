import axios from "axios";

export default async function getSkills(path:string)
{
    const info = await axios.get(path+'/api/skills').then(x => {return x.data});
    return info;
}