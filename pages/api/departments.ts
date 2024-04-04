import type { NextApiRequest, NextApiResponse } from 'next'
import mockResponse from '../../backend-response.json'
 
type ResponseData = {
  department: string
  description: string
  datasets: number
}[]
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  res.status(200).json(mockResponse)
}