import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { fadeIn } from "../variants"
import CountUp from "react-countup"
import useFetch from "../hooks/useFetch"
import { useEffect, useState } from "react"
import { Link } from "react-scroll"




const About = () => {

    const [desc, setDesc] = useState([])
    const { data, loading, errorUrl } = useFetch("/about-mes")

    useEffect(() => {
        data && setDesc(data)
    }, [data])


    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    return (
        <div className="section" id="about" ref={ref} >
            {loading ? "loading ..." : desc.map(desc => (
                <div className="container mt-[50px] lg:mt-0  mx-auto " key={desc.id}>
                    <div className="flex  gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 lg:h-screen">
                        <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="hidden lg:flex flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top">

                        </motion.div>
                        <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="flex-1">
                            <h2 className="h2 text-accent">About me.</h2>
                            <h3 className="h3 mb-4">
                                {desc.attributes.title}
                            </h3>
                            <p className="mb-6">
                                {desc.attributes.description}
                            </p>
                            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                                <div className="">
                                    <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                                        + {inView ? <CountUp start={0} end={desc.attributes.moisExperience} duration={3} /> : null}
                                    </div>
                                    <div className="font-primary text-sm tracking-[2px]">
                                        Mois of <br /> Exeperience
                                    </div>
                                </div>
                                <div className="">
                                    <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                                        {inView ? <CountUp start={0} end={desc.attributes.projectsCompleted} duration={3} /> : null}
                                    </div>
                                    <div className="font-primary text-sm tracking-[2px]">
                                        Projects <br /> completed
                                    </div>
                                </div>
                                <div className="">
                                    <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                                        + {inView ? <CountUp start={0} end={desc.attributes.coursCompleted} duration={3} /> : null}
                                    </div>
                                    <div className="font-primary text-sm tracking-[2px]">
                                        Cours <br /> Completed
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-8 items-center">
                                <Link
                                    to="contact"
                                    activeClass="active"
                                    smooth={true}
                                    spy={true}
                                >
                                    <button className='btn btn-lg'>Contact me</button>
                                </Link>
                                <a href="https://drive.google.com/file/d/1ncWdH4UBYGiu2d089yNwggwoNhcxSI0-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='text-gradient btn-link'>My Resume</a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default About