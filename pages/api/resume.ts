import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let resume = await axios.get('http://localhost:7001/resume').then(x => {return x.data})
  res.status(200).json(resume)
}