import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'


 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let skills = await axios.get('http://localhost:7001/skills').then(x => {return x.data})
  res.status(200).json(skills)
}