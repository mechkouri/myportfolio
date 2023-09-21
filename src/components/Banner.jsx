import Image from '../assets/profil.png'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'



const Banner = () => {
    return (
        <section className=" min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
            <div className="container mx-auto">
                <div className="flex flex-col-reverse gap-y-8 lg:flex-row lg:items-center ">
                    <div className="flex-1 text-center font-secondary lg:text-left ">
                        <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='text-[45px] font-bold leading-[0.8] lg:text-[80px] '>
                            SAID <span>MECHKOURI</span>
                        </motion.h1>
                        <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className="mb-6 h-[35px] text-[30px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1] ">
                            <span className=' text-white mr-4 '>I am a</span>
                            <TypeAnimation sequence={[
                                'Front-end Devloper',
                                2000,
                                'wordpress Devloper',
                                2000,
                                'Designer',
                                2000,
                            ]}
                                speed={50}
                                className='text-accent'
                                wrapper='span'
                                repeat={Infinity}
                            />

                        </motion.div>
                        <motion.p variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veniam nemo, accusamus .
                        </motion.p>
                        <motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 ">
                            <button className='btn btn-lg'>Contact me</button>
                            <a href="#" className='text-gradient btn-link'>My Portfolio</a>
                        </motion.div>
                        <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className="flex text-[20px]  lg:text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0 ">
                            <a href="#">
                                <FaGithub/>
                            </a>
                            <a href="#">
                                <FaLinkedin/>
                            </a>
                            <a href="#">
                                <FaTwitter/>
                            </a>
                        </motion.div>
                    </div>
                    <motion.div variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className=" lg:flex flex-1 max-w-[250px] lg:max-w-[330px] m-auto lg:m-0 lg:max-x-[482px] ">
                        <img src={Image} alt="image profil " />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Banner