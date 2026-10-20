  
  
const words = [
    {text: 'Ideas ', imgPath: '/portfoliosite/images/ideas.svg'},
    {text: 'Concepts ', imgPath: '/portfoliosite/images/concepts.svg'},
    { text: "Designs", imgPath: "/portfoliosite/images/designs.svg" },
    { text: "Code", imgPath: "/portfoliosite/images/code.svg" },
    {text: 'Ideas ', imgPath: '/portfoliosite/images/ideas.svg'},
    {text: 'Concepts ', imgPath: '/portfoliosite/images/concepts.svg'},
    { text: "Designs", imgPath: "/portfoliosite/images/designs.svg" },
    { text: "Code", imgPath: "/portfoliosite/images/code.svg" },
];

const counterItems = [
    {value: 2, suffix: "+", label: "Years of Experience"},
    {value: 1, suffix: "+", label: "Satisfied Projects"},
    {value: 1, suffix: "+", label: "Completed Projects"},
    {value: 99, suffix: "%", label: "Client Retention Rate"},
];

const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    
];

const logoIconsList = [
    {
        name: 'Icon-1',   
        imgPath: "/portfoliosite/images/logo1.png",
    },
    {
        name: 'Icon-2',
        imgPath: "/portfoliosite/images/logo2.png",
    },
    {
        name: 'Icon-3',
        imgPath: "/portfoliosite/images/logo3.png",
    },
    {
        name: 'Icon-1',   
        imgPath: "/portfoliosite/images/logo1.png",
    },
    {
        name: 'Icon-2',
        imgPath: "/portfoliosite/images/logo2.png",
    },
    {
        name: 'Icon-3',
        imgPath: "/portfoliosite/images/logo3.png",
    },
    
];

const abilities = [
    {
        imgPath: "/portfoliosite/images/logos/figma.jpg",
        title: "UI UX Design",
        desc: "Adept at structuring clear, compelling narratives and utilizing visual aids to keep the audience engaged.",
    },
    {
        imgPath: "/portfoliosite/images/logos/blender.jpg",
        title: "3D modelling skills",
        desc: "Proficient with Blender, and skilled in all phases of modelling processes.",
    },
    {
        imgPath: "/portfoliosite/images/logos/next.png",
        title: "Full Stack Developer",
        desc: "Deployed > 5 projects through Next JS",
    },
    {
        imgPath: "",
        title: "",
        desc: "Specialize in creating intuitive and engaging user interfaces (UI) using modern frameworks and libraries.",
    },
    
];

const historyCards = [
    
    {

        imgPath: "/portfoliosite/images/Experience/hanchiang.png",
        logoPath: '/portfoliosite/images/exp2.png',
        title: 'Han Chiang High School',
        course: "IGCSE",
        date: '2020 - 2024',
        achievements: [
            '2nd Place for Robot Design  during FLL Asia-Pacific Open Championship 2023',
            'Bronze Award in Malaysian Computing Challenge (MCC)',
            'Champion in Coolest Project Malaysia 2023 (Hardware Category)',
            'Intro to Computer Science - DISTED College',
        ],
    },
    {

        imgPath: "/portfoliosite/images/Experience/disted.png",
        logoPath: '/portfoliosite/images/exp3.png',
        course: "SACE",
        title: 'DISTED College',
        date: '2025',
        achievements: ['Achieved Silver in Malaysian Computing Challenge(MCC)', 
            'Achieved Bronze  in Olympiad Fizik Malaysia (OFM)',
        ],
            
    },
    {
        imgPath: "/portfoliosite/images/Experience/unimelb.svg",
        logoPath: '/portfoliosite/images/exp1.png',
        title: 'University of Melbourne',
        course: "Bachelor of Design",
        date: '2026 - Present',
        achievements: [
            'Participated in more than 5 hackathons during 2026.',
            "Education Officer for Google's Developer Group",
            ""
        ],
    },
    
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/portfoliosite/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "C++ Developer",
    modelPath: "/portfoliosite/models/c++-transformed.glb",
    scale: 0.07,
    rotation: [0, 0, 0],
  },
  
  {
    name: "Interactive Developer",
    modelPath: "/portfoliosite/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "3D Generalist",
    modelPath: "/portfoliosite/models/blender-transformed.glb",
    scale: 3,
    rotation: [0, 0, 0],
  },
];

const techStackImgs = [
  {
    name: "Webflow Developer",
    imgPath: "/portfoliosite/images/logos/webflow.png  ",
    
  },
  
  
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/sengkuan_01/",
    imgPath: "/portfoliosite/images/insta.png",
  },
  
  {
    name: "x",
    url: "https://x.com/franciumjr",
    imgPath: "/portfoliosite/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/sengkuan-chan/",
    imgPath: "/portfoliosite/images/linkedin.png",
  },
];


export {
    words,
    counterItems,
    navLinks,
    logoIconsList,
    abilities,
    historyCards,
    techStackIcons,
    techStackImgs,
    socialImgs,
};
