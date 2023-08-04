import FacebookIcon from "../icons/facebook-icon"
import LinkedInIcon from "../icons/linkedin-icon"
import PinterestIcon from "../icons/pinterest-icon"
import TwitterIcon from "../icons/twitter-icon"

export default function ContactDetails() {
  return (
    <div className='flex-1'>
      <h3 className='text-3xl border-b-[7px] pb-1.5 border-darkGray uppercase text-orange'>
        Reach us
      </h3>
      <div className='mt-5'>
        <p className="">Coalition Skills Test</p>
        <div className='mt-3 text-sm'>
          <p>
            535 La Plata Street
            <br />
            4200 Argentina
          </p>
        </div>
        <div className='mt-3 text-sm'>
          <p>Phone: 385.154.11.28.38</p>
          <p>Fax: 385.154.35.66.78</p>
        </div>
      </div>
      <div className='flex gap-2 pt-20'>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <div className='px-2 py-2 cursor-pointer hover:bg-black bg-gray'>
            <FacebookIcon className='w-5 h-5 fill-white ' />
          </div>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <div className='px-2 py-2 cursor-pointer hover:bg-black bg-gray'>
            <TwitterIcon className='w-5 h-5 fill-white' />
          </div>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <div className='px-2 py-2 cursor-pointer hover:bg-black bg-gray'>
            <LinkedInIcon className='w-5 h-5 fill-white' />
          </div>
        </a>
        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
          <div className='px-2 py-2 cursor-pointer hover:bg-black bg-gray'>
            <PinterestIcon className='w-5 h-5 fill-white' />
          </div>
        </a>
      </div>
    </div>
  )
}