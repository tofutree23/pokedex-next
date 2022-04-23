import { NextApiRequest, NextApiResponse } from 'next'
import { differenceInDays } from 'date-fns'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { location, numberOfGuest, startDate, endDate } = req.query

  const days = differenceInDays(
    new Date(endDate as string),
    new Date(startDate as string)
  )

  const capitalizeLocation = (location: string) =>
    location.replace(/\b[a-z]/g, (word) => word.toLocaleUpperCase())

  if (req.method === 'GET') {
    res.status(200).json([
      {
        img: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253',
        location: `Private room in center of ${capitalizeLocation(
          location as string
        )}`,
        title: 'Stay at this spacious European House',
        description: `${numberOfGuest} guest(s) · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine`,
        star: 4.73,
        price: '$30 / night',
        total: `$${30 * +numberOfGuest * days || 1} total`,
        long: 126.985385,
        lat: 37.563265,
      },
      {
        img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
        location: `Private room in center of ${capitalizeLocation(
          location as string
        )}`,
        title: 'Independant luxury studio apartment',
        description: `${numberOfGuest} guest(s) · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen`,
        star: 4.3,
        price: '$40 / night',
        total: `$${40 * +numberOfGuest * days || 1} total`,
        long: 126.9837784767151,
        lat: 37.56341722212463,
      },
      {
        img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        location: `Private room in center of ${capitalizeLocation(
          location as string
        )}`,
        title: 'Seoul Studio Apartments',
        description: `${numberOfGuest} guest(s) · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine`,
        star: 3.8,
        price: '$35 / night',
        total: `$${35 * +numberOfGuest * days || 1} total`,
        long: 126.929007768631,
        lat: 37.55469532267666,
      },
      {
        img: 'https://images.unsplash.com/photo-1588796460666-590f1d712a2e',
        location: `Private room in center of ${capitalizeLocation(
          location as string
        )}`,
        title: '30 mins to Myeong-dong, Seoul',
        description: `${numberOfGuest} guest(s) · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine`,
        star: 4.1,
        price: '$55 / night',
        total: `$${55 * +numberOfGuest * days || 1} total`,
        long: 126.96851134300233,
        lat: 37.54443270725994,
      },
      {
        img: 'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0',
        location: `Private room in center of ${capitalizeLocation(
          location as string
        )}`,
        title: 'Spacious Peaceful Modern Bedroom',
        description: `${numberOfGuest} guest(s) · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning`,
        star: 5.0,
        price: '$60 / night',
        total: `$${60 * +numberOfGuest * days || 1} total`,
        long: 127.01963424682619,
        lat: 37.51857639324129,
      },
      {
        img: 'https://images.unsplash.com/photo-1582174570676-65b65dbf5ac5',
        location: `Private room in center of ${capitalizeLocation(
          location as string
        )}`,
        title: 'The Blue Room In Seoul',
        description: `${numberOfGuest} guest(s) · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine`,
        star: 4.23,
        price: '$65 / night',
        total: `$${65 * +numberOfGuest * days || 1} total`,
        long: 126.9569778442383,
        lat: 37.507683259200554,
      },
      {
        img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        location: `Private room in center of ${capitalizeLocation(
          location as string
        )}`,
        title: '5 Star Luxury Apartment',
        description: `${numberOfGuest} guest(s) · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine`,
        star: 3.85,
        price: '$90 / night',
        total: `$${90 * +numberOfGuest * days || 1} total`,
        long: 127.03371047973634,
        lat: 37.49515418965081,
      },
    ])
  }
}
