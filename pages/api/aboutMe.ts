import type { NextApiRequest, NextApiResponse } from 'next'

import aboutMe from '@/public/aboutMe.json'
 

 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ aboutMe })
}