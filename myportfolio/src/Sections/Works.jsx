
import Project from "../components/Project"
import useFetch from '../hooks/useFetch';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';





const Works = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 3000, // Auto-scroll interval in milliseconds
    responsive: [

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const [project, setProject] = useState([])
  const { data, loading, errorUrl } = useFetch("/projects?populate=*")

  useEffect(() => {
    data && setProject(data)
  }, [data])

  const projects = project.map(project => <Project key={project.id} project={project} />)

  return (
    <section className="section" id="works">
      <div className="container mx-auto">
        <div className="">
          <h2 className="h2 leading-tight text-accent">
            My Latest <br /> Work.
          </h2>
          <p className="max-w-[600px] mb-8 lg:mb-16">
            In the ever-evolving world of web development,
            I've had the privilege of working on some exciting projects that showcase my passion for innovation and problem-solving.
          </p>
        </div>
        <div >
          {loading ? "loading ..." : (
            <Slider {...settings}>
              {projects}
            </Slider>
          )}
        </div>

      </div>
    </section>
  )
}

export default Works