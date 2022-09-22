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
  username: "Jerin Thomas",
  title: "Greetings, I'm Jerin",
  subTitle: emoji(
    "A passionate 🎯 software engineer  from 🇮🇳 who mainly works on Infrastructure As Code Solutions with various cloud providers ☁⛅🌩. I'm a hardcore Backend Developer, enthusiastic about DSA and System Design."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1lwjnUdZ742e6TKaGaycVriC2a3Rzzi_U/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jerinthomas1404",
  linkedin: "https://www.linkedin.com/in/jerinthomas1404/",
  gmail: "jerinthomas0498@gmail.com",
  twitter:"https://mobile.twitter.com/jerinthomas1404",
  gitlab: "https://gitlab.com/jerinthomas1404",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
   stackoverflow: "https://stackoverflow.com/users/10711205/jerin",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Backend Development using various frameworks and libraries. I also develop solutions which leverage various cloud services.",
  skills: [],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Go",
      fontAwesomeClassname: "logos:gopher"
    },
    
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "logos:mongodb"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "logos:react"
    },
    
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "logos:postgresql"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "logos:terraform"
    },
    {
      skillName: "Ansible",
      fontAwesomeClassname: "logos:ansible"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "logos:jenkins"
    }, 
    {
      skillName: "Azure",
      fontAwesomeClassname: "logos:microsoft-azure"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "logos:google-cloud"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "logos:docker"
    },
    {
      skillName: "html",
      fontAwesomeClassname: "logos:html-5"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "logos:css-3"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "logos:python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "vscode-icons:file-type-cpp3"
    },
   
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of Mumbai",
      logo: require("./assets/images/universityofmumbai.png"),
      subHeader: "Bachelor Of Engineering in Computer Engineering",
      score: " CGPA 9.03 / 10 ",
      duration: "Aug 2016 - October 2020",
      desc: "Activities:",
      descBullets: [
        "Student Developer Group Member ",
        "Coders' Club Member👨‍💻",
        "Computer Society of India Member - DBA Team"
      ]
    },
    {
      schoolName: "Delhi Public School",
      logo: require("./assets/images/dps.png"),
      subHeader: "Higher Secondary Certificate ",
      score: " 89.25% ",
      duration: "June 2015 - June 2016",
      desc: "Activities",
      descBullets: ["Editorial Team member 📚",
                    "Sports Team member 🏓"]
    },
    {
      schoolName: "New Horizon Public School",
      logo: require("./assets/images/nhps.png"),
      subHeader: "Secondary School Certificate ",
      score: "CGPA: 10 / 10",
      duration: "June 2014 - June 2015",
      desc: "Activities",
      descBullets: ["Editorial Team member 📚",
                    "Sports Team member 🏊",
                    "Student Council member 🏫 "
                    ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
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
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs2.jpg"),
      date: "Aug 2020 – Present",
      desc: "Member of Infrastructure As Code Team for the Ultimatix Cloud Unit",
      descBullets: [
        "Codified the infrastructure provisioning process using HashiCorp tools such as Terraform",
        "Automating the configurational tasks using Jenkins and Ansible",
        "Integrated various Azure Services to develop enterprise solutions"
      ]
    },
    {
      role: "Project Associate - Full Stack Developer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs.png"),
      date: "Jun 2019 – Aug 2019",
      desc: "Member of Cloud Applications, Microservices and APIs Team",
      descBullets: [
        "Built an web application for testing and analyzing API performance",
        "Provided a detailed dashboard with various metrics such as response time, total number of failures,failed pre-request etc"
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Ramrao Adik Institute of Technology",
      companylogo: require("./assets/images/rait.png"),
      date: "Jun 2019 – Aug 2020",
      desc: "Member of Sofware Development Group - RAIT",
      descBullets: [
        "Developed a student registration web app for Ramrao Adik Institute of Technology",
        "Transformed the boring manual student registration process to an interactive web application"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Academic and Professional Projects",
  subtitle: "SOME INTERESTING VENTURES I HAVE WORKED ON IN MY STUDENT AND PROFESSIONAL LIFE",
  projects: [
    {
      image: require("./assets/images/farmeasy.png"),
      projectName: "Krushak-Unnati (Farmeasy)",
      projectDesc: "An AI-powered chatbot which enables farmers to obtain expert guidance and grievance redressal through features like Best Crop Suggestion & Crop Disease Detection",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/frizzid07/krushak-unnati"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/driveralertness.jpg"),
      projectName: "Driver Alertness Detection",
      projectDesc: "A system deployed on the vehicular dashboard camera to monitor the heartbeat and facial features of the driver to detect drowsiness and issue alerts",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/jerinthomas1404/driver-alertness-detection"
        }
      ]
    },
    {
      image: require("./assets/images/ivaidya.png"),
      projectName: "i-Vaidya",
      projectDesc: "A PWA integrated with deep learning model which classifies user provided chest X-Rays to generate a diagnosis for chronic pulmonary disease",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/jerinthomas1404/srm_hack-1"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Hackathons, Research Work, Professional Affiliations and certifications",

  achievementsCards: [
    {
      title: "Hackathons",
      subtitle:
        "Domain - Machine Learning, Web Development",
      image: require("./assets/images/hackathon.gif"),
      lists:["🥈 @NIT Raipur's CodeUtsava 4.0","🥉 @SRM's HackSRM","Best Design @ RAIT's BitCamp2K19", "Finalist @TSEC Hacks 2019"],
      footerLink: [
        {
          name: "CodeUtsava4.0",
          url: ""
        },
        {
          name:"HackSRM",
          url:""
        },
        {
          name:"BitCamp 2K19",
          url:""
        }
        
      ]
    },
    {
      title: "Research Papers",
      subtitle:
        "Topics: Deep Learning,OpenCV",
      image: require("./assets/images/research.gif"),
      lists:["[1] Body Posture Detection Using Computer Vision"],
      footerLink: [
        {
          name: "Research Paper",
          url: "https://doi.org/10.14445/23942584/IJVSP-V7I1P102"
        }
      ]
    },

    {
      title: "Affliations & Certifications",
      subtitle: "Topics: Cloud Computing, Automation Tools, Data Engineering",
      image: require("./assets/images/certification.gif"),
      lists:["Microsoft Certified: Azure Data Engineer Associate","Microsoft Certified: Azure Fundamentals","RedHat Ansible","CloudBees Jenkins"],
      footerLink: [
        {
          name: "Certificate", 
          url: "https://www.credly.com/badges/d60093cc-39af-42f8-a501-999260762b46/public_url"
        },
        {
          name: "Certificate",
          url: "https://www.credly.com/badges/c009c77b-f779-4854-bd19-2814db59824f/public_url"
        },
        {
          name: "Certificate",
          url: "https://verify.skilljar.com/c/ftxwxuynb55f"
        },
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1qhQ9Oh1_-7A_wZqtDMXuFsT3M-KJbwlW/view?usp=sharing"
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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  number: "+91-9867897831",
  email_address: "jerinthomas1498@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "jerinthomas1404", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

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
  twitterDetails
};
