
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Profils from './Profils'
import SocialMedia from './SocialMedia'
import { Link } from 'react-scroll'




const Banner = ({ information }) => {

    return (
        <section className=" min-h-[75vh] lg:min-h-[78vh] flex items-center" id="home">
            <div className="container mx-auto" key={information.id} >
                <div className="flex flex-col-reverse gap-y-8 lg:flex-row lg:items-center ">
                    <div className="flex-1 text-center font-secondary lg:text-left ">
                        <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[45px] font-bold leading-[0.8] lg:text-[80px] '>
                            {information.attributes.name} <span> {information.attributes.lastName} </span>
                        </motion.h1>
                        <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="mb-6 h-[35px] text-[30px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1] ">
                            <span className=' text-white mr-4 '>I am a</span>
                            <Profils />
                        </motion.div>
                        <motion.p variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>

                            {information.attributes.description}

                        </motion.p>
                        <motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 ">
                        <Link
                                to="contact"
                                activeClass="active"
                                smooth={true}
                                spy={true}
                                >
                            <button className='btn btn-lg'>Contact me</button>
                        </Link>
                            <a href="https://drive.google.com/file/d/1ncWdH4UBYGiu2d089yNwggwoNhcxSI0-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='text-gradient btn-link'>My Resume</a>
                        </motion.div>


                        <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="flex text-[20px]  lg:text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0 ">
                            <SocialMedia />
                        </motion.div>

                    </div>
                    <motion.div variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className=" lg:flex  flex-1 max-w-[250px] lg:max-w-[330px] m-auto lg:m-0 lg:max-x-[482px] " id='profil-img'>
                        <img src={information.attributes.profilImage.data.attributes.url} alt={information.attributes.lastName} loading="lazy" />
                    </motion.div>
                </div>

            </div>
        </section>

    )
}

export default Banner