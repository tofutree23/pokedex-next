import Image from 'next/image'

export default function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl-h[700px]'>
      <Image
        src='https://images.unsplash.com/photo-1596941248238-0d49dcaa4263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        alt='jeju-island'
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg text-white'>
          Not sure where to go? Great.
        </p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
          I am flexible
        </button>
      </div>
    </div>
  )
}
