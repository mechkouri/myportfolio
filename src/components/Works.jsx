
import { Carousel } from '@trendyol-js/react-carousel'
import Project from "./Project"
import {project} from '../constants'
import { useMediaQuery } from 'react-responsive';





const Works = () => {
    
    const projects = project.map( project => <Project key={project.id} {...project}  />)
    let cl;
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <section className="section" id="works">
        <div className="container mx-auto">
        <div className="">
                        <h2 className="h2 leading-tight text-accent">
                            My Latest <br /> Work.
                        </h2>
                        <p className="max-w-[600px] mb-16">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Minus porro quis voluptatum vitae maiores reprehenderit.
                        </p>
                    </div>
                    
            <div className="flex flex-col lg:flex-row ">
                
            <Carousel show={isMobile ? 1 : 2.1} slide={1} swiping={true} dynamic={true} responsive={true}	  onRightArrowClick={true} leftArrow={cl} infinite	transition={0.5}>
                    {projects}
                </Carousel>
            </div>
        </div>
    </section>
  )
}

export default Works