
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { education, experiences } from "../constants";




const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "rgb(34 19 74 / 35%)",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(34 19 74 / 35%)" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[60%] h-[60%] object-contain'
            />
          </div>
        }
      >
        <div>
          <h3 className='h3 text-gradient text-[24px]'>{experience.title}</h3>
          <p
            className=' text-[16px] font-semibold m-0'
          >
            {experience.company_name}
          </p>
        </div>
  
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  };


  export default ExperienceCard