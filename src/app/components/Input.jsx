export default function Input({ className = '', ...rest }) {
  const commonClass = ` focus:bg-darkGray/10 bg-[#F6F6F6] !w-full focus:outline-0 border border-lightgray  placeholder:text-black/40 pb-2 py-2 px-4 text-black  rounded-sm w-full transition-all ${className}`
  const isTextArea = rest.type === 'textarea'

  return (
    <>
      {isTextArea ? (
        <textarea {...rest} className={commonClass} />
      ) : (
        <input {...rest} className={`${commonClass} h-11`} />
      )}
    </>
  )
}