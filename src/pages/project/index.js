import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

import {
  wordleClone,
  gpt3,
  gericht,
  huddle,
  restCOuntry,
} from '../../assets/images'

// projects data
export const projects = [
  {
    id: 1,
    name: '',
    desc:
      '',
    stack: 'HTML CSS JAVASCRIPT',
    gitHubUrl: {
      icon: <GrGithub />,
      url: '',
    },
    website: {
      icon: <TbWorld />,
      url: '',
    },
    imgUrl: wordleClone,
  },
  {
    id: 2,
    name: '',
    desc: 'A',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: '',
    },
    website: {
      icon: <TbWorld />,
      url: '',
    },
    imgUrl: gericht,
  },
  {
    id: 3,
    name: '',
    desc: '',
    stack: 'React JS',
    imgUrl: gpt3,

    gitHubUrl: {
      icon: <GrGithub />,
      url: '',
    },
    website: {
      icon: <TbWorld />,
      url: '',
    },
  },
  {
    id: 4,
    name: '',
    desc: '',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: '',
    },
    website: {
      icon: <TbWorld />,
      url: '',
    },
    imgUrl:
      '',
  },

  {
    id: 5,
    name: '',
    desc: 'A project that displays all information about a country',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: '',
    },
    website: {
      icon: <TbWorld />,
      url: '',
    },
    imgUrl: restCOuntry,
  },
  {
    id: 6,
    name: '',
    desc: '',
    stack: 'React js, SCSS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: '',
    },
    website: {
      icon: <TbWorld />,
      url: '',
    },
    imgUrl: huddle,
  },
]

