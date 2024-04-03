import { User } from '@/types/chat/user';
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler( req: NextApiRequest, res: NextApiResponse)
{
  let id = req.query.id

  if(id)
  { 
    let user = await axios.get('http://localhost:8000/userById?userId='+id).then(x => { return x.data}).catch(e => console.log(e))

    let avatar = './avatar.jpg'

    if(user.avatar)
      avatar = 'https://cdn.discordapp.com/avatars/'+user.id+'/'+user.avatar+'.webp'
    
    let u:User = {id:user.id, name:user.name, avatar: avatar, connectionId:''}
    res.status(200).json(u)
  }
}