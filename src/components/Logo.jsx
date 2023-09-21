
const Logo = ({logo, title}) => {
  return (
    <div className='shadow-md rounded-xl shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={logo} alt="HTML icon" />
                  <p className='my-4'>{title}</p>
     </div>
  )
}

export default Logo