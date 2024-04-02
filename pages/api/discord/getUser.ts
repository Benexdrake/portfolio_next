import { User } from '@/types/chat/user';
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler( req: NextApiRequest, res: NextApiResponse)
{
  let id = req.query.id

  if(id)
  { 
    const config = {
      headers: { Authorization: `Bot ${process.env.TOKEN}` }
    };
    let user = await axios.get('https://discord.com/api/users/'+id, config).then(x => { return x.data}).catch(e => console.log(e))
    
    let username = user.global_name;

    if(!user.global_name)
      username = user.username

    let avatar = ''

    if(user.avatar)
      avatar = 'https://cdn.discordapp.com/avatars/'+user.id+'/'+user.avatar+'.webp'
    
    
    let u:User = {id:user.id, name:username, avatar: avatar}

    res.status(200).json(u)
  }
}