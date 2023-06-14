import React from 'react'
import Fade from 'react-reveal/Fade'
//import { projects } from './index'
import { Project } from '../../components'
import { Blast } from '../../components'
import './projectpage.scss'

const ProjectPage = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate')
  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <section className="section__projects section__padding">
      <div className="fake-big">Мои проекты</div>
      <h2 aria-label="My projects" className="section__projects-title">
        <Blast
          letterClass={letterClass}
          arrayStr={['М', 'о', 'и', '', 'П', 'р', 'о', 'е', 'к', 'т', 'ы']}
          indexLetter={12}
        />
      </h2>
      <div className="section__projects-description">
        <Fade bottom>
          <p>
            В данной секции представлено несколько завершенных проектов:
          </p>
        </Fade>
      </div>
      
    </section>
  )
}

export default ProjectPage
