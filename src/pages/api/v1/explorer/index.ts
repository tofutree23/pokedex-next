import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({
      result: [
        {
          img: 'https://images.unsplash.com/photo-1535189043414-47a3c49a0bed',
          location: 'Seoul',
          distance: '15-minute drive',
        },
        {
          img: 'https://images.unsplash.com/photo-1595647329462-9d32d9077f06',
          location: 'Ilsan',
          distance: '1.5-hour drive',
        },
        {
          img: 'https://images.unsplash.com/photo-1545984910-0fef939483ba',
          location: 'Busan',
          distance: '6.5-hour drive',
        },
        {
          img: 'https://images.unsplash.com/photo-1576492841000-2ab391b8044e',
          location: 'Chuncheon',
          distance: '1-hour drive',
        },
        {
          img: 'https://images.unsplash.com/photo-1593620779901-cba661428cc3',
          location: 'Gangneung',
          distance: '5-hour drive',
        },
        {
          img: 'https://images.unsplash.com/photo-1548115184-bc6544d06a58',
          location: 'Jeonju',
          distance: '4.5-hour drive',
        },
        {
          img: 'https://images.unsplash.com/photo-1587121748119-ffb5090f9d82',
          location: 'Yeosu',
          distance: '6-hour drive',
        },
        {
          img: 'https://images.unsplash.com/photo-1633265637677-3b467d86cad3',
          location: 'Kyungju',
          distance: '5-hour drive',
        },
      ],
    })
  } else {
    res.status(404)
  }
}
