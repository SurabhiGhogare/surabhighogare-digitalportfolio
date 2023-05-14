/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Surabhi Ghogare",
  title: "Hi all, I'm Surabhi",
  subTitle: emoji(
    "I am a hardworking individual with good time management skills and the ability to work under pressure. I am passionate about my stufs and want to use my skills to benefit the organization. 🚀 "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SurabhiGhogare",
  linkedin: "https://www.linkedin.com/in/surabhi-ghogare-39a491236/",
  gmail: "surabhighogare@gmail.com",
  instagram: "https://instagram.com/_surabhehehe_?igshid=ZGUzMzM3NWJiOQ==",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ELECTRONICS ENGINEER WHO WANTS TO EXPLORE THE DIFFERENT HARDWARE AND SOFTWARE COMPONENTS.",
  skills: [
    emoji("⚡ Proficient in C, C++, PYTHON, JAVASCRIPT, AI/ML through multiple projects during academics."),
    emoji("⚡ Knowledge of embeded sofwares and protocals."),
    emoji("⚡ Constant learner, willing to innovate new things, and able to adapt to newtechnologies.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "MIT Academy Of Engineering ",
      logo: require("./assets/images/MIT.jpg"),
      subHeader: "Bachelor of Electrical Engineering",
      duration: "August 2019 - June 2023",
      desc: "Participated in the various college events and published a IEEE research paper.",
      descBullets: [
        "CGPA : 7.0"
      ]
    },
    {
      schoolName: "Sarasvati Junior College, Nanded",
      logo: require("./assets/images/saraswati Jr clg.jpeg"),
      subHeader: "HSC",
      duration: "2018 - 2019",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Percentage : 60 %"]
    },
    {
      schoolName: "Mahatma Phule High School, Nanded",
      logo: require("./assets/images/Mahatma Phule.jpeg"),
      subHeader: "SSC",
      duration: "2016- 2017",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Percentage : 77 %"]
    }
  ]
};

// // Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intern",
      company: "Enerture Technologies Pvt. Ltd.",
      companylogo: require("./assets/images/Enerture Tech.jpeg"),
      date: "June 2022 - July 2022",
      desc: "In this the task is to learn and setup the EV Charging Plamt. For the purpose we have been given some online live tranning sessions and once after the completion we have visited diffirent companies like AUDI, Tata, Indian Oil etc. for the hands on of our learnings.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Intern ",
      company: "Pragati Enterprises",
      companylogo: require("./assets/images/Pragati Enterprises.jpeg"),
      date: "July 2022 - August 2022",
      desc: "We have learned the basic understanding of the hardware and software in embeded system. we ahve to design varous hardware components and the backed software configuration for the validation and tetsing purpose."
    }
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some of the projects i have done",
  projects: [
    {
      image: require("./assets/images/web Development.png"),
      projectName: "Web Development for Accessing and Management of E- Study Material",
      projectDesc: "E-library is a Platform where all the E-Books, Research papers, Articles, Journals, Study material are available to the students. Using this web site, the student or the user can access all the resources, but for that the user requires access from their institute. Anyone with the college email-id can create an account and access all the resources like books, research papers and study material.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Robot.jpeg"),
      projectName: "Obstacle Avoidance Robot Simulation in Webot",
      projectDesc: "Webots is an open source robot simulator that provides a complete development environment to model, program and simulate robots. Here we want to implement a simple avoidance algorithm to robot. We use e-puck robot, and simulated it on Webots Robot Simulator",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/Fire Fighting Robot.jpeg"),
      projectName: "Development of Fire Fighting Robot",
      projectDesc: "we present the development of a firefighting robot that can extinguish fire without the need for firefighters to be exposed to unnecessary danger. It is designed to be compact in size in order to ease small location entry for deeper reach of extinguishing fire in narrow space. It is also equipped with an ultrasonic sensor to avoid it from hitting any obstacle and surrounding objects, while a flame sensor is attached for fire detection. This resulted in demonstrating capabilities of identifying fire locations automatically and ability to extinguish fire remotely at particular distances.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "IEEE Conference",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/IEEE.png"),
      imageAlt: "IEEE Certificate",
      footerLink: [
        {
          name: "IEEE Conference",
          url: "https://drive.google.com/file/d/1XzOXmPQoWVKyqK5DL-0JwQdRxvNRtr6Z/view?usp=share_link"
        }
      ]
    },
    {
      title: "MSME Internship",
      // subtitle:
      //   "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/MSME.jpeg"),
      imageAlt: "MSME Certification",
      footerLink: [
        {
          name: "MSME Internship",
          url: "https://drive.google.com/file/d/1NqphZrakues4tNZ-7LaDxEboZJzmWApB/view?usp=share_link"
        }
      ]
    },

    {
      title: "NPTEL Certification",
      // subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/NPTEL.png"),
      imageAlt: "NPTEL Certification",
      footerLink: [
        // {name: "Certification", url: ""},
        {
          name: "NPTEL Certification",
          url: "https://drive.google.com/file/d/1tjP1TzxHhogmDvABJ7GTTqquk40u1A-e/view?usp=share_link"
        }
      ]
    },
    {
      title: "EV Training completion",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/EV.jpeg"),
      imageAlt: "EV Training",
      footerLink: [
        // {name: "Certification", url: ""},
        {
          name: "EV Training completion",
          url: "https://drive.google.com/file/d/1MZypbeAdZbAu8HjLeihkUtPEdpabTgGL/view?usp=share_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://surabhighogare.hashnode.dev/introduction-to-cloud-computing-exploring-the-basics-types-of-cloud-computing-services-iaas-paas-and-saas",
      title: "Introduction to Cloud Computing: Exploring the Basics, Types of Cloud Computing Services: IaaS, PaaS, and SaaS",
      // description:
      //   "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://surabhighogare.hashnode.dev/cloud-security-protecting-data-in-the-cloud",
      title: "Cloud Security: Protecting Data in the Cloud",
      // description:
      //   "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
