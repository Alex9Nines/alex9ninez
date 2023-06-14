import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowDropDown } from 'react-icons/md'

import Blast from '../BlastAnimation/Blast'
import './header.scss'

const nameArray = ['`','A', 'l', 'e', 'x', '', 'N', 'i', 'n', 'e','z', '`',',']
const jobArray = [
  'w',
  'e',
  'b',
  '',
  'd',
  'e',
  'v',
  'e',
  'l',
  'o',
  'p',
  'e',
  'r',
  '.',
]

const Header = () => {
  const [letterClass, setLetterClass] = useState('text-animate')


  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <section className="section-1 header__container section__padding">
        <main className="intro-page">
          <h1 arial-label="Привет, я Алексей aka Alex Ninez, Junior full-stack developer">
            <span className={letterClass}>П</span>
            <span className={`${letterClass} _12`}>р</span>
            <span className={`${letterClass} _12`}>и</span>
            <span className={`${letterClass} _12`}>в</span>
            <span className={`${letterClass} _12`}>е</span>
            <span className={`${letterClass} _12`}>т</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>Я</span>
            <span className={`${letterClass} _15`}> - </span>
            <span className={`${letterClass} _16`}>А</span> 
            <span className={`${letterClass} _16`}>л</span> 
            <span className={`${letterClass} _16`}>е</span>
            <span className={`${letterClass} _16`}>к</span> 
            <span className={`${letterClass} _16`}>с</span> 
            <span className={`${letterClass} _16`}>е</span> 
            <span className={`${letterClass} _16`}>й</span> 
            <span className={`${letterClass} _16`}> </span> 
            
            {''}
           
            <Blast
              letterClass={letterClass}
              arrayStr={nameArray}
              indexLetter={15}
            />
            <br />
            <Blast
              letterClass={letterClass}
              arrayStr={jobArray}
              indexLetter={22}
            />
          </h1>

          <p className="text-desc">Web-разработчик</p>
          <Link to="/contact" className="contact-button">
            <div>
              <span className="bg switch__bg"></span>
              <span className="base switch__border-color"></span>
              <span className="text">Свяжитесь со мной</span>
            </div>
          </Link>
          <div className="scroll__wrapper switch__color">
            <MdArrowDropDown className="scroll__down switch__color" />
          </div>
        </main>
      </section>
    </>
  )
}

export default Header
