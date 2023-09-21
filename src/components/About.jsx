import {  motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { fadeIn } from "../variants"
import CountUp from "react-countup"




const About = () => {
    const [ref, inView] = useInView({
        threshold : 0.5,
    })
  return (
    <div className="section" id="about" ref={ref} >
        <div className="container mt-[50px] lg:mt-0  mx-auto ">
            <div className="flex  gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 lg:h-screen">
                <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}} className="hidden lg:flex flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top">

                </motion.div>
                <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}} className="flex-1">
                    <h2 className="h2 text-accent">About me.</h2>
                    <h3 className="h3 mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Omnis labore quae ratione.
                    </h3>
                    <p className="mb-6">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Ipsa odio deleniti, ipsam tempora doloremque facere nisi consequuntur unde quis,
                         saepe eligendi soluta quibusdam, ad quaerat omnis nobis ratione itaque maiores!
                    </p>
                    <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                        <div className="">
                            <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                                {inView ? <CountUp start={0} end={9} duration={3} /> : null}
                            </div>
                            <div className="font-primary text-sm tracking-[2px]">
                                Mois of <br /> Exeperience
                            </div>
                        </div>
                        <div className="">
                            <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                                {inView ? <CountUp start={0} end={30} duration={3} /> : null}
                            </div>
                            <div className="font-primary text-sm tracking-[2px]">
                                Projects <br /> completed
                            </div>
                        </div>
                        <div className="">
                            <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                                {inView ? <CountUp start={0} end={9} duration={3} /> : null}
                            </div>
                            <div className="font-primary text-sm tracking-[2px]">
                                Satisfied <br /> Clients
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-8 items-center">
                        <button className="btn btn-lg">Contact me</button>
                        <a href="#" className="text-gradient btn-link">
                            My Portfolio
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About