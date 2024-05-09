//AboutM
import Icon1 from './images/AIcon1.png'
import Icon2 from './images/AIcon2.png'
import Icon3 from './images/AIcon3.png'
import Icon4 from './images/AIcon4.png'

//JobCard
import Card1 from './images/JobCard1.png'
import Card2 from './images/JobCard2.png'
import Card3 from './images/jobCard3.png'

//Review
import Review1 from './images/review1.png'
import Review2 from './images/review2.png'
import avatar1 from './images/manAvatar.png'
import avatar2 from './images/womanAvatar.png'

//Footer
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { LiaDiscourse } from "react-icons/lia";


export const menuM = [
    {
        name: 'About Us',
        url: '/#about',
    },
    {
        name: 'Services',
        url: '/#services',
    },
    {
        name: 'Why DevOptima',
        url: '/#whyDevOptima',
    },
]


export const AboutM = [
    {
        icon: <img src={Icon1} />,
        title: 'DevOps transformation',
        text: 'Reshaping businesses with DevOps expertise ',
    },
    {
        icon: <img src={Icon2} />,
        title: 'Efficient operations',
        text: 'Streamline processes for productivity gains',
    },
    {
        icon: <img src={Icon3} />,
        title: 'CI/CD implementation',
        text: 'Seamless software delivery pipeline',
    },
    {
        icon: <img src={Icon4} />,
        title: 'Automation mastery',
        text: 'unlock full automation potential',
    },

]

export const JobM = [
    {
        img: <img src={Card1} width={350} />,
        title: 'Continuous Integration & Deployment',
        text: 'Streamline your development process with our advanced CI/CD solutions, ensuring faster and more reliable code deployment',
    },
    {
        img: <img src={Card2} width={350} />,
        title: 'cloud Solutions & Infrastructure Management',
        text: 'Leverage the cloud for scalability and efficiency. We provide comprehensive cloud infrastructure management and optimization services.',
    },
    {
        img: <img src={Card3} width={350} />,
        title: 'Automated Testing & Quality Assurance',
        text: 'Enhance product quality with out automated testing services, designed to detect issues early and reduce time-to-market.',
    },
]

export const ReviewM = [
    {
        icon: <img src={Review1} width={40} />,
        text: <p>Thanks to DevOpima, Our team can focus more on <b>innovation</b> and less on operational challenges. Their <b>cloud management solutions</b> are top-notch.</p>,
        avatar: <img src={avatar1} width={50} />,
        name: 'John Smith',
        job: 'IT Director at Reflex',
    },
    {
        icon: <img src={Review2} width={40} />,
        text: <p>DevOptima has been a game-changer for us. With their support, we've shifted our focus<b>from operational hurdles to pushing boundaries in innovation.</b></p>,
        avatar: <img src={avatar2} width={50} />,
        name: 'Jane Doe',
        job: 'Tech Lead at Dribble',
    },

]

export const FooterResources = [
    {
        name: 'Docs',
    },
    {
        name: 'Release notes',
    },
    {
        name: 'Security',
    },
]

export const FooterCommunity = [

    {
        icon: <FaTwitter color='var(--gray)' size={20} style={{ marginRight: '10px' }} />,
        name: 'Twitter',
    },
    {
        icon: <IoLogoLinkedin color='var(--gray)' size={20} style={{ marginRight: '10px' }} />,
        name: 'Linkedin',
    },
    {
        icon: <IoLogoGithub color='var(--gray)' size={20} style={{ marginRight: '10px' }} />,
        name: 'GitHub',
    },
    {
        icon: <LiaDiscourse color='var(--gray)' size={20} style={{ marginRight: '10px' }} />,
        name: 'Discourse',
    },
]
export const FooterLegal = [

    {
        name: 'Privacy policy',
    },
    {
        name: 'Terms of service',
    },
]