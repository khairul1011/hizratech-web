import React from 'react';
import axios from 'axios';
import '../assets/css/style.css'
const blogImg1 = '/img/blog/blog-1.jpg'
import '../assets/css/variables.css'


class News extends React.Component {
    state = {
        datas: [],
        errors: null
    };

    Databerita() {
        axios
            .get(
                'https://newsapi.org/v2/top-headlines?apiKey=ad6f2890af034a25acacdf972d4c18a2&country=id&category=technology'
            )
            .then(response =>
                response.data.articles.map(
                    newsdata => ({
                        name: `${newsdata.source.name}`,
                        title: `${newsdata.title}`,
                        description: `${newsdata.description}`,
                        author: `${newsdata.author}`,
                        content: `${newsdata.content}`,
                        image: `${newsdata.urlToImage}`,
                        url: `${newsdata.url}`,
                        create: `${newsdata.publishedAt}`
                    })

                )
            )

            .then(datas => {
                this.setState(
                    {
                        datas
                    },
                    console.log(datas)
                );
            })
            .catch(error => this.setState({ error }));
    }

    componentDidMount() {
        this.Databerita();
    }

    render() {
        const { datas } = this.state;
        return (
            <React.Fragment>

                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li>Artikel </li>
                        </ol>
                        <h2>Artikel </h2>
                    </div>
                </section>
                <section id="blog" className="blog">
                    <div className="container" data-aos="fade-up">
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="row gy-4 posts-list">
                                    {
                                        datas.map(data => {
                                            const {
                                                name,
                                                title,
                                                description,
                                                image,
                                                content,
                                                author,
                                                url,
                                                create
                                            } = data;

                                            return (
                                                <div className="col-lg-6" key={data.title}>
                                                    <article className="d-flex flex-column">
                                                        {/* <div className="post-img">
                                                            <img src={image} alt="" className="img-fluid" />
                                                        </div> */}
                                                        <h3 className="title">
                                                            <a href={url} >{author}</a>
                                                        </h3>
                                                        <div className="meta-top">
                                                            <ul>
                                                                <li className="d-flex align-items-center"><i className="bi bi-clock" /> <a href="/blogdetail">{create}</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="content">
                                                            <p>
                                                                {title}
                                                            </p>
                                                        </div>
                                                        <div className="read-more mt-auto align-self-end">
                                                            <a href={url} target="_blank">Read More</a>
                                                        </div>
                                                    </article>
                                                </div>
                                            );
                                        })
                                    }
                                </div>{/* End blog posts list */}
                                
                                {/* <div className="blog-pagination">
                                    <ul className="justify-content-center">
                                        <li><a href="#">1</a></li>
                                        <li className="active"><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                    </ul>
                                </div> */}

                            </div>
                           
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );
    }
}

export default News;