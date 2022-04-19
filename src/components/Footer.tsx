export default function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold uppercase'>about</h5>
        <p>How we works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Membership</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold uppercase'>community</h5>
        <p>Accessibility</p>
        <p>We are fake haha</p>
        <p>Reveal this!</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold uppercase'>host</h5>
        <p>How to</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold uppercase'>support</h5>
        <p>Customer Center</p>
        <p>Email</p>
        <p>Kakao Talk</p>
      </div>
    </div>
  )
}
