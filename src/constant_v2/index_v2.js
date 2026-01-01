  
  
const words = [
    {text: 'Ideas ', imgPath: '/portfoliosite/public/images/ideas.svg'},
    {text: 'Concepts ', imgPath: '/portfoliosite/public/images/concepts.svg'},
    { text: "Designs", imgPath: "/portfoliosite/public/images/designs.svg" },
    { text: "Code", imgPath: "/portfoliosite/public/images/code.svg" },
    {text: 'Ideas ', imgPath: '/portfoliosite/public/images/ideas.svg'},
    {text: 'Concepts ', imgPath: '/portfoliosite/public/images/concepts.svg'},
    { text: "Designs", imgPath: "/portfoliosite/public/images/designs.svg" },
    { text: "Code", imgPath: "/portfoliosite/public/images/code.svg" },
];

const counterItems = [
    {value: 2, suffix: "+", label: "Years of Experience"},
    {value: 50, suffix: "+", label: "Satisfied Projects"},
    {value: 45, suffix: "+", label: "Completed Projects"},
    {value: 85, suffix: "%", label: "Client Retention Rate"},
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
        imgPath: "/portfoliosite/public/images/logo1.png",
    },
    {
        name: 'Icon-2',
        imgPath: "/portfoliosite/public/images/logo2.png",
    },
    {
        name: 'Icon-3',
        imgPath: "/portfoliosite/public/images/logo3.png",
    },
    {
        name: 'Icon-1',   
        imgPath: "/portfoliosite/public/images/logo1.png",
    },
    {
        name: 'Icon-2',
        imgPath: "/portfoliosite/public/images/logo2.png",
    },
    {
        name: 'Icon-3',
        imgPath: "/portfoliosite/public/images/logo3.png",
    },
    
];

const abilities = [
    {
        imgPath: "/portfoliosite/public/images/logos/powerpoint.png",
        title: "Strong skills in Presentation and Exhibition",
        desc: "Adept at structuring clear, compelling narratives and utilizing visual aids to keep the audience engaged.",
    },
    {
        imgPath: "/portfoliosite/public/images/logos/cube.png",
        title: "3D modelling skills",
        desc: "Proficient with Blender, and skilled in all phases of modelling processes.",
    },
    {
        imgPath: "/portfoliosite/public/images/logos/react.png",
        title: "Front-End Web Development",
        desc: "Specialize in creating intuitive and engaging user interfaces (UI) using modern frameworks and libraries.",
    },
    
];

const historyCards = [
    {
        imgPath: "/portfoliosite/public/images/Experience/jelutong.png",
        logoPath: '/portfoliosite/public/images/exp1.png',
        title: 'Jelutong Primary School',
        date: '2014 - 2019',
        achievements: [
            'Won 3rd Place in Penang Science Fair',
        ],
    },
    {

        imgPath: "/portfoliosite/public/images/Experience/hanchiang.png",
        logoPath: '/portfoliosite/public/images/exp2.png',
        title: 'Han Chiang High School',
        date: '2020 - 2024',
        achievements: [
            '2nd Place for Robot Design  during FLL Asia-Pacific Open Championship 2023',
            'Bronze Award in Malaysian Computing Challenge (MCC)',
            'Champion in Coolest Project Malaysia 2023 (Hardware Category)',
        ],
    },
    {

        imgPath: "/portfoliosite/public/images/Experience/disted.png",
        logoPath: '/portfoliosite/public/images/exp3.png',
        title: 'DISTED College',
        date: '2025',
        achievements: ['Silver Award in Malaysian Computing Challenge(MCC)', 
            'Bronze Award in Olympiad Fizik Malaysia (OFM)',
        ],
            
    },
    
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/portfoliosite/public/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "C++ Developer",
    modelPath: "/portfoliosite/public/models/c++-transformed.glb",
    scale: 0.07,
    rotation: [0, 0, 0],
  },
  
  {
    name: "Interactive Developer",
    modelPath: "/portfoliosite/public/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "3D Generalist",
    modelPath: "/portfoliosite/public/models/blender-transformed.glb",
    scale: 3,
    rotation: [0, 0, 0],
  },
];

const techStackImgs = [
  {
    name: "Webflow Developer",
    imgPath: "/portfoliosite/public/images/logos/webflow.png  ",
    
  },
  
  
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/sengkuan_01/",
    imgPath: "/portfoliosite/public/images/insta.png",
  },
  
  {
    name: "x",
    url: "https://x.com/franciumjr",
    imgPath: "/portfoliosite/public/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/seng-kuan-chan-18072326b",
    imgPath: "/portfoliosite/public/images/linkedin.png",
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
