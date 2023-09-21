
  import bac from "../assets/ecolem6.png";
  import este from "../assets/este.png";
  import ensm from "../assets/ens.png";
  import comabout from "../assets/comabout.png";
  import digitalspeak from "../assets/digitalspeak_logo.jpg";


import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
import Img4 from '../assets/portfolio-img4.png'
  
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
  




  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: digitalspeak,
      iconBg: "#ffffff",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: comabout,
      iconBg: "#000000",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: comabout,
      iconBg: "#000000",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];


   
  const education = [
    {
      title: "Professional Licence",
      company_name: "EST essaouira",
      icon: este,
      iconBg: "#ffffff",
      date: "March 2021 - April 2022",
      points: [
        "As a person who earned a Professional Licence in Computer Systems and Software Engineering from the Higher School of Technology in Essaouira, I have demonstrated a strong foundation in computer science and software engineering. I have likely gained practical skills and experience in designing, developing, and testing software applications.",
        
      ],
    },
    {
      title: " University Diploma of Technology",
      company_name: "ENS marrakech",
      icon: ensm,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - Feb 2021",
      points: [
        "The Higher School of Technology Essaouira offers a university degree program in technology. This program provides students with a comprehensive education in the field of technology, covering topics such as computer science, software engineering, and information systems.",
      ],
    },
    {
      title: " Baccalaureate",
      company_name: "M6 azilal",
      icon: bac,
      iconBg: "#ffffff",
      date: "Jan 2014 - Jan 2018",
      points: [
        "Obtaining a Baccalaureate degree in Science with a major in Physics typically takes three years of full-time study at a college. During this time, students will take a variety of courses in physics, mathematics, and related fields.",
        
      ],
    }
  ];


  

  const project= [
      {   id:1,
          img: Img1,
          title: "desgne 1",
          type:"UI/UX Design"
      }, {
          id:2,
          img: Img2,
          title: "Web site 1",
          type:"Web Dev"
      },
      {
          id:3,
          img: Img3,
          title: "Web site 1",
          type:"Web Dev"
      }, {
          id:4,
          img: Img4,
          title: "Web site 1",
          type:"Web Dev"
      }
  ]






  const logos= [
    {   id:1,
        logo: HTML,
        title: "HTML",
    },
    { id:2,
      logo: CSS,
      title: "CSS",
    },
    { id:2,
      logo: JavaScript,
      title: "JavaScript",
    },{ id:2,
      logo: ReactImg,
      title: "React",
    },{ id:2,
      logo: GitHub,
      title: "GitHub",
    },{ id:2,
      logo: Node,
      title: "Node",
    },{ id:2,
      logo: Mongo,
      title: "MONGO DB",
    },{ id:2,
      logo: Tailwind,
      title: "TAILWINDCSS",
    },
    { id:2,
      logo: FireBase,
      title: "FIREBASE ",
    },
     
]
  

  
  
  export {   experiences , education , project, logos};