'use client'
import NavBar from './components/Navbar'
import Breadcrumb from './components/Breadcrumb'
import ContactForm from './components/Form'
import ContactDetails from './components/ContactDetails'

export default function Home() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Who we are', url: '/who-we-are' },
    { name: 'Contact' }
  ];

  return (
    <div className='overflow-hidden'>
      <NavBar />
      <main className='my-10 container-main'>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <div>
          <div className='my-10 space-y-1'>
            <h3 className='text-[35px] font-bold text-orange'> Contact</h3>
            <p className='w-full md:max-w-[62rem] text-black/50'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className='flex flex-col w-full gap-20 mt-14 md:flex-row md:justify-between'>
            <ContactForm />
            <ContactDetails />
          </div>
        </div>
      </main>
    </div>
  )
}
