
import { FaGithub } from "react-icons/fa"

const Project = ({project}) => {
  return (
    <div style={{ display: 'grid !important' }} className="group relative w-auto overflow-hidden border-2 border-white/50 rounded-xl mr-0 lg:mr-10 z-50">
    <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
    <img src={project.attributes.image.data[0].attributes.url}  className="group-hover:scale-125 transition-all duration-500" alt={project.attributes.title} />
    <div className="absolute -bottom-full left-2  lg:left-12 group-hover:bottom-24 transition-all duration-300 z-50 ">
       <span className="text-gradient text-[16px] ">{project.attributes.type}</span> 
    </div>
    <div  className="absolute -bottom-full left-2  lg:left-12 group-hover:bottom-16 lg:group-hover:bottom-14 transition-all duration-700 z-50 ">
        <span className="text-[18px] lg:text-3xl text-white ">{project.attributes.title}</span>
    </div>
    <div className="flex justify-between gap-6 w-400 items-center absolute -bottom-full left-2  lg:left-12  group-hover:bottom-2 transition-all duration-700 z-50 ">
        <a href={project.attributes.githubURL} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-[27px] w-[40px] h-[40px] flex items-center justify-center">
          <FaGithub/>
        </a>
        <button className="btn px-3 py-1 text-[14px]"><a href={project.attributes.demoURL} target="_blank" rel="noopener noreferrer">Demo</a></button>
    </div>
</div>
  )
}

export default Project