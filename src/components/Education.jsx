
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { education } from "../constants";
import ExperienceCard from './ExperienceCard';

const Education = ( ) => {
    return (
      <>
        <motion.div variants={textVariant()} >
          <p className={` text-center`}>
            What I have done so far
          </p>
          <h2 className='h2 leading-tight text-accent text-center'>
            Work Experience.
          </h2>
        </motion.div>
  
        <div className='mt-15 flex flex-col'>
          <VerticalTimeline>
            {education.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </>
    );
  };

export default SectionWrapper(Education, "work");
