
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { Logo } from '../components';



const Skills = () => {
  const [logo, setLogo] = useState([])
    const {data, loading, errorUrl} = useFetch("/logos?populate=*")

    useEffect(()=>{
        data && setLogo(data)
       },[data])

    const skills = logo.map(logo => <Logo key={logo.id} logo={logo} /> )
  return (
    <section className="container pt-[20px] lg:pt-[50px] lg:mt-0  mx-auto" id="works">
        <div className="container mx-auto">
        <div className="">
                        <h2 className="h2 leading-tight text-accent">
                            My Latest <br /> skills.
                        </h2>
                        <p className="max-w-[600px] mb-4 lg:mb-16">
                        I'm fluent in a range of technologies and methodologies,
                         and I'm dedicated to staying at the forefront of industry trends.
                        </p>
                    </div>

         <div className='w-full grid grid-cols-2 sm:grid-cols-4 content-center items-center	justify-center	 gap-4 text-center py-8'>
              {skills}
          </div>
                   
        </div>
       
    </section>
  )
}

export default Skills