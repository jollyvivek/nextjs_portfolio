import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import html5 from './HTML5.png'
import css3 from './CSS3.png'
import bootstrap from './Bootstrap.png'
import tailwind from './Tailwind.png'
import js from './JavaScript.png'
import react from './React.png'
import next from './Next.js.png'
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    html5,
    css3,
    bootstrap,
    tailwind,
    js,
    react,
    next,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Educity React app',
        description: 'Website App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Real Estate Next App ',
        description: 'Website',
        bgImage: '/work-3.png',
    },
    // {
    //     title: 'UI/UX designing',
    //     description: 'UI/UX Design',
    //     bgImage: '/work-4.png',
    // },
]

export const projects = [
    {title:'REIS – Rhombus Education & Immigration Services Website',
        description:"The REIS website is a fully responsive platform built using React.js and Bootstrap CSS. Designed for seamless browsing and efficient user interaction, this project includes:",
        desc1:"Smooth Scrolling: Enhances navigation for a better user experience.",
        desc2:"Responsive Design: Adapts perfectly to all screen sizes.",
        desc3:"Working Contact Form: Enables users to send inquiries directly to the admin email.",
        info:"This project demonstrates proficiency in React.js, Bootstrap, and modern web design, making it a well-structured and functional website for Rhombus Education and immigration services.",
        websiteLink:"https://www.rhombuseducation.com/"
    },
    {title:'Edusity – College & University Website',
        description:"Edusity is a fully responsive college/university website built using React.js. This project showcases modern web development practices, incorporating key features such as:",
        desc1:"Smooth Scrolling: Enhanced user experience with seamless navigation.",
        desc2:"Responsive Design: Adapts perfectly to all screen sizes.",
        desc3:"Working Contact Form: Integrated contact form that sends inquiries directly to an email.",
        info:"This project demonstrates expertise in React.js, Bootstrap, and UI/UX design, making it is a great modern educational website.",
        websiteLink:"https://edusity-react-project.netlify.app/"
    },
    {title:'Real Estate – Modern Property Listing Website',
        description:"The Real Estate project is a fully responsive and dynamic property listing website built with React.js and Tailwind CSS. Designed for seamless user experience, it includes:",
        desc1:"Smooth Scrolling: Enhancing navigation for better usability.",
        desc2:"Responsive Design: Adapts perfectly to all screen sizes.",
        desc3:"Working Contact Form: Allows users to send inquiries directly to the admin email.",
        info:"This project demonstrates expertise in React.js, Tailwind CSS, and UI/UX development, creating a modern and efficient platform for real estate businesses.",
        websiteLink:"https://real-estate-project-theta-gold.vercel.app/"
    }
]







export const serviceData = [
    { icon: assets.web_icon, title: 'Web Design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.react, title: 'React App', description: 'React App development involves creating Website for All devices...', link: '' },
    { icon: assets.next, title: 'Next App', description: 'Next App focuses on creating a seamless user experience...', link: '' },
    // { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js,Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Sc(IT) in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode,assets.html5,assets.css3,
    assets.bootstrap,assets.tailwind,
    assets.js,assets.react,assets.next,assets.figma, assets.git
];