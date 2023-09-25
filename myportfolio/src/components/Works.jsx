
import { Carousel } from '@trendyol-js/react-carousel'
import Project from "./Project"
import { useMediaQuery } from 'react-responsive';
import useFetch from '../hooks/useFetch';
import { useEffect, useState } from 'react';
import { CustomLeftArrow, CustomRightArrow } from './CustomArrow';





const Works = () => {
    

    const [project, setProject] = useState([])
    const {data, loading, errorUrl} = useFetch("/projects?populate=*")

    useEffect(()=>{
        data && setProject(data)
       },[data])
    
    const projects = project.map( project => <Project key={project.id} project={project}  />)
  
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
            {loading ? "loading ..." : (
            <Carousel show={isMobile ? 1 : 2.1} slide={1} swiping swipeOn={1} rightArrow={<CustomRightArrow />} leftArrow={<CustomLeftArrow />} infinite dynamic responsive	transition={0.5}>
                    {projects}
            </Carousel>
             )}
            </div>
           
        </div>
    </section>
  )
}

export default Works