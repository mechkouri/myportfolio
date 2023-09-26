import { Link } from 'react-scroll';
import Logo from '../assets/logow.png';

const Header = () => {
  return (
    <header className='py-8'>
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <a href="#">
                    <img src={Logo} alt="logo-sm" loading="lazy" className='w-[70px]'/>
                </a>
                <Link
                         to="contact"
                         activeClass="active"
                         smooth={true}
                         spy={true}
                        >
                <button className='btn btn-sm'>work with me </button>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header