import React from "react"
import myCV from "../../assets/images/MyCV.pdf"
import Reveal from "react-reveal/Reveal"
import Fade from "react-reveal/Fade"

// components
import { Cards, Blast } from "../../components"
import "./about.scss"

const About = () => {
    const [letterClass, setLetterClass] = React.useState("text-animate")
    React.useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000)
    }, [])

    return (
        <>
            <Reveal>
                <div className="fake-big">Обо мне</div>
            </Reveal>
            <div className="section-about-wrapper section__padding">
                <article className="section-about-description">
                    <div>
                        <h2 arial-aria-label="About and skills">
                            <Blast
                                letterClass={letterClass}
                                arrayStr={["О", "б", "о", " ", "м", "н", "е"]}
                                indexLetter={15}
                            />
                        </h2>
                        <Fade bottom>
                            <p>
                                Я full-stack разработчик, уровня junior+/middle,
                                увлеченный кодингом гуманитарий. В работе
                                предпочитаю Javascript и связанные технологии,
                                но также практикую PHP(Wordpress и Laravel).
                            </p>
                        </Fade>
                        <Fade bottom>
                            <p>
                                Я из Москвы, где и проживаю в настоящее время. В
                                профессию меня привел интерес, жажда знаний, и
                                практически неограниченная предметная область
                                Web-разработки.
                            </p>
                        </Fade>
                        <Fade bottom>
                            <p>
                                Я умею работать с большими объемами ранее
                                неизвестной информации, благодаря большому
                                опыту, разбираюсь во многих предметных областях,
                                а соединив все это с устойчивыми навыками
                                Web-разработки, я готов помочь Вам в реализации
                                проектов в различных областях бизнеса и
                                общественной жизни. Здесь Вы можете скачать мое
                                резюме и начать наше плодотворное сотрудничество
                                прямо сейчас!
                            </p>
                        </Fade>
                        <Fade left>
                            <a
                                style={{ marginTop: "2rem" }}
                                href={myCV}
                                download
                                className="contact-button submit-button"
                            >
                                <div>
                                    <span className="bg switch__bg"></span>
                                    <span className="base switch__border-color"></span>
                                    <span className="text">Download CV</span>
                                </div>
                            </a>
                        </Fade>
                    </div>
                </article>
                
                <h2 arial-aria-label="About and skills" className="skills">
                <Blast
                    letterClass={letterClass}
                    arrayStr={[
                        
                        "Н",
                        "а",
                        "в",
                        "ы",
                        "к",
                        "и",
                    ]}
                    indexLetter={15}
                               /></h2> 
                
                {/* programming language cards */}
                <Cards />
            </div>
        </>
    )
}

export default About
