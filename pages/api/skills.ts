import type { NextApiRequest, NextApiResponse } from 'next'

import skills from '@/public/skills.json'
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(skills)
}