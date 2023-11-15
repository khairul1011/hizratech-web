import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({data}) => {
    return (
        <>
            <article className="d-flex flex-column" >
                <div className="post-img">
                    <img
                        src={`http://localhost:1337${data.attributes.thumbnail.data.attributes.url}`}
                        alt=""
                        className="img-fluid"
                    />
                </div>
                <h2 className="title">
                    <a href="/blogdetail">{data.attributes.Title}</a>
                </h2>
                <div className="meta-top">
                    <ul>
                        <li className="d-flex align-items-center">
                            <i className="bi bi-person" /> 
                            <a href="/blogdetail">{data.attributes.author.data.attributes.name}</a>
                        </li>
                        <li className="d-flex align-items-center">
                            <i className="bi bi-clock" />
                            <a href="/blogdetail">{data.attributes.publishedAt}</a>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <p>
                        {data.attributes.content}
                    </p> 
                </div>
                <div className="read-more mt-auto align-self-end">
                    <Link to={`/blogdetail/${data.id}`} >Read More</Link>
                </div>
            </article>
        </>
    )
}

export default PostCard