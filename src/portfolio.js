/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import { Icon } from '@iconify/react';

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Amruta Mulay",
  title: "Hello World!",
  subTitle: emoji(
    "Welcome to my little corner of the internet! I'm Amruta - a full-stack software developer currently pursuing my Master's degree in Computer Science from the University of Southern California. Innovation is my passion and with every line of code, I aspire to make a difference✨"
      ),
  resumeLink:
    "https://drive.google.com/file/d/1monjFy76pDKdGhgO2lbHw694VtqORkYJ/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Amruta1311",
  linkedin: "https://www.linkedin.com/in/amruta-mulay-48804316b/",
  medium: "https://amruta1311.medium.com/",
  gmail: "aamulay@usc.edu",
  researchGate: "https://www.researchgate.net/profile/Amruta-Mulay",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Tech Stack",
  subTitle: emoji( "MY CURIOSITY ALLOWS ME TO EXPLORE THE TECHNICAL DIVERSITIES ⚡" ),
  skills: [
    // emoji(
    //   "➡ Develop interactive User Interfaces for web applications along with robust backend APIs"
    // ),
    // emoji("➡ Built an Ethereum-based application that promotes the fundamentals of Blockchain Technology"),
    // emoji(
    //   "➡ Designed Machine Learning algorithms for analyzing business world problems"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "cpp",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Amazon AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
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
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Solidity",
      fontAwesomeClassname: "fab fa-stripe-s"
    },
    {
      skillName: "angularJS",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Southern California, Los Angeles, California",
      logo: require("./assets/images/usc.jpeg"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - May 2024",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Sardar Vallabhbhai National Institute of Technology, Surat, India",
      logo: require("./assets/images/SVNIT.png"),
      subHeader: "Bachelor of Technology in Computer Engineering",
      duration: "August 2017 - June 2021",
      // desc: "Ranked top 10% in the program.",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Delhi Public School",
      logo: require("./assets/images/DPS.jpg"),
      subHeader: "Higher Secondary Education",
      duration: "September 2013 - May 2017",
      // desc: "Ranked top 10% in the program.",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

// const techStack = {
//   viewSkillBars: true, //Set it to true to show Proficiency Section
//   experience: [
//     {
//       Stack: "Frontend/Design", //Insert stack or technology you have experience in
//       progressPercentage: "90%" //Insert relative proficiency in percentage
//     },
//     {
//       Stack: "Backend",
//       progressPercentage: "70%"
//     },
//     {
//       Stack: "Programming",
//       progressPercentage: "60%"
//     }
//   ],
//   displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
// };

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "JP Morgan Chase & Co.",
      companylogo: require("./assets/images/jpmc.jpeg"),
      date: "July 2021 - July 2022",
      desc: "Worked in the Finance domain on a front office trading application as a Full stack developer using Java, Springboot, ReactJS, and other cutting-edge technologies. Implemented end-to-end development that includes -      ",
      descBullets: [
        // "Developed a trading app simulator that handles the buying and selling of different stocks to maximise profit.",
        // "Built a Java application that virtualizes the server to handle dynamic API requests and responses for fast, robust and comprehensive testing.",
        // "Designed a user interface performing CRUD operations for this Java application using ReactJS for the business clients to call these API requests efficiently.",
        "Developed a virtualized server to handle dynamic API requests and responses for robust, and comprehensive testing. Built a user interface to perform CRUD operations using ReactJS for the business clients to call the API requests efficiently.",
        "Designed, developed, tested, modified, and implemented application code. Made standard modifications to existing software applications and modules as per high-level specifications, application support, and industry standards. Followed a test-driven development approach to provide maximum code coverage and deliver a quality product. Experience in detecting and recovering the failures in the application using various tools such as Geneos, Splunk, Control M, etc.",
        "Developed a Monitoring system that sends email alerts if any external connection fails."

      ]
    },
    {
      role: "SWE Intern",
      company: "Tech for Social Good Initiative by JPMC",
      companylogo: require("./assets/images/ffg3.png"),
      date: "June 2020 – July 2020",
      desc: "JPMC hosts hackathons at their global technology centers for students to work side by side with its employees and use their skills to solve real-world problems for non-profit organisations.",
      descBullets: [
        " I participated in Tech For Social Good hackathon to collaborate with other coders and develop innovative technology solutions for the NGO, AIM Foundation.",
        " Me and my team worked on different frameworks to build an e-learning platform focused on adaptive learning that helps user to learn at their own pace.",
        "Developed a learning management system that allows students to learn at their own pace as well as teachers to administer, track and report student performance, along with the feature to upload educational courses.",
        "Analyzed, designed, developed, tested and deployed the final web application within 3 weeks on Amazon AWS EC2 instance for the client to use the application instantly."
      ] 
    },
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
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       projectName: "Saayahealth",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://saayahealth.com/"
//         }
//         //  you can add extra buttons here.
//       ]
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       projectName: "Nextu",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://nextu.se/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Publication And Certifications 🏆 "),
  subtitle:
    "Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Published a book chapter with CRC Press, Taylor & Francis Group, UK",
      subtitle:
        "Chapter Name: Leveraging Blockchain Technology for Decentralized Domain Name Broker Service",
      image: require("./assets/images/taylor&francis.png"),
      footerLink: [
        {
          name: "Publication Link",
          url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003129486-17/leveraging-blockchain-technology-decentralized-domain-name-broker-service-sankita-patel-ujjwal-kumar-hrishabh-sharma-amruta-mulay-rishabh-kumar?context=ubx&refId=5b415257-67f6-4b6%204-8d7f-022718f05ee5"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Inter-NIT Athletics Tournament, NIT Warangal",
      subtitle:
        "I represented my university, NIT Surat and participated in the All India Inter-NIT Athletics Tournament held at NIT Warangal in 2019.",
      image: require("./assets/images/nitw.jpeg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1zJYfEd27UMxG-i2jttIi26vOJkocJYh_/view?usp=sharing"
        }
      ]
    },

    {
      title: "Winner of GD during the Techno-Cultural Fest held at NIT Surat",
      subtitle: "I won the group discussion competition held by the Tech Cryptors who conducted a 3D Game Designing Workshop at NIT Surat.",
      image: require("./assets/images/merit.png"),
      footerLink: [
        // {name: "Certification", url: ""},
        {
          name: "Merit Certificate",
          url: "https://drive.google.com/file/d/1mOwzEyvX9ldBN6gZ117URfTu1QRD2lZR/view?usp=sharing"
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
    "With the Love for developing applications, I also enjoy writing and sharing new knowledge that I have learnt!",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: emoji(
    "Creativity in life is saying yes to new ideas! Creative thinking inspires these ideas, which in return, inspire change 🌱✨"),
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  // techStack,
  workExperiences,
  openSource,
  // bigProjects,
  achievementSection,
  blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  // twitterDetails
};
