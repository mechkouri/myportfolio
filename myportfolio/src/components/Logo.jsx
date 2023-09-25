
const Logo = ({logo}) => {
  return (
    <div className='shadow-md rounded-xl shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={logo.attributes.image.data.attributes.url} loading="lazy" alt={logo.attributes.title} />
                  <p className='my-4'>{logo.attributes.title}</p>
     </div>
  )
}

export default Logo