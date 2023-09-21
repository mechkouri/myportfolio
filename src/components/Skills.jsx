
import { logos } from '../constants';
import Logo from './Logo';


const Skills = () => {
    const skills = logos.map(logo => <Logo key={logo.id} {...logo} /> )
  return (
    <div className="" id="works">
        <div className="container mx-auto">
        <div className="">
                        <h2 className="h2 leading-tight text-accent">
                            My Latest <br /> skills.
                        </h2>
                        <p className="max-w-[600px] mb-16">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Minus porro quis voluptatum vitae maiores reprehenderit.
                        </p>
                    </div>

         <div className='w-full grid grid-cols-2 sm:grid-cols-4 content-center items-center	justify-center	 gap-4 text-center py-8'>
              {skills}
          </div>
                   
        </div>
       
    </div>
  )
}

export default Skills