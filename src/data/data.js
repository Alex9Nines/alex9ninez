import React from 'react'

// react icons
import { FiGrid, FiLinkedin, FiYoutube, FiFigma } from 'react-icons/fi'
import { ImBlogger } from 'react-icons/im'
import { VscProject } from 'react-icons/vsc'
import {
  BsBootstrapFill,
  BsPersonLinesFill,
  BsGithub,
 
} from 'react-icons/bs'
import { RiContactsLine, RiReactjsLine } from 'react-icons/ri'
import {
  SiFuturelearn,
  SiSass,
  SiExpress,
  SiRedux,
  SiTailwindcss
} from 'react-icons/si'

import { GrGithub, GrTwitter, } from 'react-icons/gr'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiMongodb } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaNodeJs, FaGit } from 'react-icons/fa'
import {TbSql} from 'react-icons/tb'
// sidebar menu list and icons
const sideBarMenu = [
  {
    text: 'Главная',
    icon: <FiGrid className="link-icon" />,
    url: '/',
  },
  {
    text: 'Обо мне',
    icon: <BsPersonLinesFill className="link-icon" />,
    url: '/about',
  },
  {
    text: 'Мои проекты',
    icon: <VscProject className="link-icon" />,
    url: '/project',
  },
  {
    text: 'Блог',
    icon: (
      <ImBlogger
        className="link-icon"
        style={{ fill: 'current', stroke: 'current' }}
      />
    ),
    url: '/blog',
  },
  {
    text: 'Контакты',
    icon: <RiContactsLine className="link-icon" />,
    url: '/contact',
  },
  {
    text: 'Обучение',
    icon: <SiFuturelearn className="link-icon" />,
    url: '/tutorial',
  },
  
]
// social media icons and url
const socialIcons = [
  {
    icon: <GrGithub className="icon switch__color" />,
    url: 'https://github.com/Alex9Nines',
  },
  
  {
    icon: <GrTwitter className="icon switch__color" />,
    url: 'https://twitter.com/AlekseyDevatov',
  },
  
  {
    icon: <FiLinkedin className="icon switch__color" />,
    url: 'https://www.linkedin.com/in/alexey-devyatov-b05693180/',
  },
]
// programming lanuages (spanText), icons and url
const skillSet = [
  {
    icon: <AiFillHtml5 className="skills-icon switch__color" />,
    spanText: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    icon: <DiCss3 className="skills-icon switch__color" />,
    spanText: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    icon: <IoLogoJavascript className="skills-icon switch__color" />,
    spanText: 'JAVASCRIPT',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
  },
  {
    icon: <SiSass className="skills-icon switch__color" />,
    spanText: 'SASS',
    url: '',
  },
  {
    icon: <SiTailwindcss className="skills-icon switch__color" />,
    spanText: 'Tailwind',
    url: 'https://tailwindcss.com',
  },
  {
    icon: <BsBootstrapFill className="skills-icon switch__color" />,
    spanText: 'BOOTSTRAP',
    url: '',
  },
  {
    icon: <FaGit className="skills-icon switch__color" />,
    spanText: 'GIT',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
  },
  {
    icon: <BsGithub className="skills-icon switch__color" />,
    spanText: 'GITHUB',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
  },
  {
    icon: <RiReactjsLine className="skills-icon switch__color" />,
    spanText: 'REACT JS',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started',
  },

  {
    icon: <FaNodeJs className="skills-icon switch__color" />,
    spanText: 'NODE',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs',
  },

  {
    icon: <DiMongodb className="skills-icon switch__color" />,
    spanText: 'MONGO DB',
    url: '',
  },
  {
    icon: <TbSql className="skills-icon switch__color" />,
    spanText: 'SQL',
    url: '',
  },
  {
    icon: <SiExpress className="skills-icon switch__color" />,
    spanText: 'EXPRESS JS',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Express',
  },
  {
    icon: <SiRedux className="skills-icon switch__color" />,
    spanText: 'Redux',
    url: 'https://redux.js.org/introduction/getting-started',
  },
  {
    icon: <FiFigma className="skills-icon switch__color" />,
    spanText: 'Figma',
    url: 'https://figma.com',
  },
  
]

export { sideBarMenu, socialIcons, skillSet }
