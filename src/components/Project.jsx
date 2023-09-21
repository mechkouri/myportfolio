
import { FaGithub } from "react-icons/fa"

const Project = ({img, title, type}) => {
  return (
    <div className="group relative w-auto overflow-hidden border-2 border-white/50 rounded-xl mr-0 lg:mr-10">
    <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
    <img src={img} className="group-hover:scale-125 transition-all duration-500" alt="project 1" />
    <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50 ">
       <span className="text-gradient ">{type}</span> 
    </div>
    <div  className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
        <span className="text-3xl text-white ">{title}</span>
    </div>
    <div className="flex justify-between w-400 items-center absolute -bottom-full left-12  group-hover:bottom-2 transition-all duration-700 z-50 ">
        <a href="#" className="cursor-pointer text-[27px] w-[40px] h-[40px] flex items-center justify-center">
          <FaGithub/>
        </a>
        <button className="btn px-3 py-1 text-[14px]">Demo</button>
    </div>
</div>
  )
}

export default Project