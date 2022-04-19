import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({
      result: [
        {
          img: 'https://images.unsplash.com/photo-1535373254831-0a72002623d2',
          title: 'Outdoor getaways',
        },
        {
          img: 'https://images.unsplash.com/photo-1524518668639-e6cc8c13ca08',
          title: 'Unique stays',
        },
        {
          img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09',
          title: 'Entire homes',
        },
        {
          img: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36',
          title: 'Pet allowed',
        },
      ],
    })
  } else {
    res.status(404)
  }
}
