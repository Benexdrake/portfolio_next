import type { NextApiRequest, NextApiResponse } from 'next'

import about from '@/public/about.json'
 

 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(about)
}