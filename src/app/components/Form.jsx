import { useState } from 'react'
import Input from './Input'
import SpinnerIcon from '../icons/spinner-icon'

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [formResponse, setFormResponse] = useState('')

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const submitForm = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const formId = 'fb0768d3-2b88-4fd3-a609-f8681f65f392'
    const portalId = '42767357'
    const { name, phone, email, message } = formState

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            submittedAt: Date.now(),
            fields: [
              {
                name: 'email',
                value: email,
              },
              {
                name: 'firstname',
                value: name,
              },
              {
                name: 'phone',
                value: phone,
              },
              {
                name: 'message',
                value: message,
              },
            ],
          }),
        },
      )
      const responseData = await response.json()
      setFormResponse(responseData?.inlineMessage)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
      setFormState({
        name: '',
        phone: '',
        email: '',
        message: ''
      })
      setTimeout(() => {
        setFormResponse('')
      }, 4000)
    }
  }

  return (
    <div className='flex-1'>
      <h3 className='text-3xl border-b-[7px] pb-1.5 border-darkGray uppercase text-orange'>
        Contact us
      </h3>
      <form className='mt-5 space-y-2' onSubmit={submitForm}>
        <Input
          placeholder="Name *"
          name='name'
          value={formState.name}
          onChange={handleChange}
          required
        />
        <div className='flex justify-between w-full gap-1.5'>
          <Input
            placeholder="Phone *"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            required
            className='!flex-1'
          />
          <Input
            placeholder="Email *"
            name='email'
            value={formState.email}
            onChange={handleChange}
            required
            className='!flex-1'
          />
        </div>
        <Input
          placeholder='Message *'
          type='textarea'
          rows={5}
          name='message'
          value={formState.message}
          onChange={handleChange}
          required
        />
        <button
          type='submit'
          className='flex justify-center items-center w-28 px-5 py-2.5 !mt-4 text-sm font-semibold text-white uppercase transition-colors ease-in-out bg-orange hover:opacity-90'
          disabled={isLoading}
        >
          {isLoading ? (
            <div className='flex items-center justify-center h-full gap-1'>
              <span className='text-center'>Submit</span>
              <SpinnerIcon className='w-4 h-4 animate-spin' />
            </div>
          ) : (
            <span className='text-center'>Submit</span>
          )}
        </button>
        <p className='font-bold text-green'>{formResponse}</p>
      </form>
    </div>
  )
}