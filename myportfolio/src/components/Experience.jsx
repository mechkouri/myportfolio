
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { SectionWrapper } from "../hoc";
import ExperienceCard from './ExperienceCard';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { textVariant } from '../variants';

const Experience = () => {
  const [experience, setExperience] = useState([])
  const { data, loading, errorUrl } = useFetch("/experiences?populate=*")

  useEffect(() => {
    data && setExperience(data)
  }, [data])

  return (
    <>
      <motion.div variants={textVariant()}  >
        <p className={` text-center`}>
          What I have done so far
        </p>
        <h2 className='h2 leading-tight text-accent text-center'>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-15 flex flex-col'>
        <VerticalTimeline>
          {experience.map((experience, index) => (
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

export default SectionWrapper(Experience, "work");


