import React from "react"
import "./singlepost.scss"

const SinglePost = React.memo((props) => {
    const { title, brief, coverImage, url } = props
    return (
        <>
            <article className="section__article">
                <img src={coverImage} alt="" />
                <div className="article__styles switch__color">
                    <h2 className="article__title">{title}</h2>
                    <p className="article__content">
                        {brief.substring(0, 150)}
                    </p>
                    <a className="switch__color blog__readmore" href={url}>
                        Читать дальше...
                    </a>
                </div>
            </article>
        </>
    )
})

export default SinglePost
