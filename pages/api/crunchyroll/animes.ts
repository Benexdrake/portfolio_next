import type { NextApiRequest, NextApiResponse } from 'next'
import animesDB from '@/public/Animes.json'
import { Anime } from '@/types/anime';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let animes:Anime[] = animesDB;
  
  let page = parseInt(req.query.page+''); 
  let name:string = req.query.name+'';
  let start = 0;
  let end = 20;
  
  if (page > 1)
    {
      start = 20 * page;
      end = 20 * page +20;
    }

    if(name !== 'undefined')
    {
      let a = animes.filter(x => x.title.toLowerCase().includes(name.toLowerCase()));
      if(a.length > 20)
        {
          res.status(200).json({
            length: a.length,
            animes:a.slice(start,end)
          })
        }
      else
      {
        res.status(200).json({
          length: a.length,
          animes:a
        })
      }
    }
    else
    {
      let a = animesDB.slice(start,end);
      res.status(200).json({
        length: animesDB.length,
        animes:a
      })
    }
}