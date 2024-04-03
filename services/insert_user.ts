import { User } from "@/types/chat/user";
import axios from "axios";

export default async function InsertUser(user:User)
{
    let avatar = ''

    if(user.avatar)
        avatar = user.avatar

    await axios.post('http://localhost:8000/insertUser', {id:user.id, avatar:avatar, name:user.name, connectionId:user.connectionId});
}