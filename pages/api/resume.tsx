import type { NextApiRequest, NextApiResponse } from 'next'

import resume from '@/public/resume.json'
 

 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(resume)
}