import Logo from '../assets/logow.png';


const Header = () => {
  return (
    <header className='py-8'>
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <a href="#">
                    <img src={Logo} alt="logo-sm" className='w-[70px]'/>
                </a>
                <button className='btn btn-sm'>
                    work with me 
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header