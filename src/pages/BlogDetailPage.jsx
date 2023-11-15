import BlogApi from '../config/BlogApi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/style.css'
import '../assets/css/variables.css'
const blogImg1 = '/img/blog/blog-1.jpg'

const BlogDetailPage = () => {

  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await BlogApi.detail(id);
        // const resImage = await BlogApi.find();
        console.log("Response from API:", res);
        setPost(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchdata();
  }, [id]);

  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <p></p>
          <ol>
            <li><a href='/'>Home</a ></li>
            <li>Blog Details</li>
          </ol>
          <h2>Blog Details</h2>
        </div>
      </section>
      {/* ======= Blog Details Section ======= */}
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-8">

              <article className="blog-details" >
                <div className="post-img">
                  <img src={`http://localhost:1337${post?.attributes?.thumbnail?.data.attributes?.url}`} alt={post?.attributes?.slug} className="img-fluid" />
                </div>
                <h2 className="title">{post?.attributes?.Title}</h2>
                <div className="meta-top">
                  <ul>
                    <li className="d-flex align-items-center"><i className="bi bi-person" /> <a href="/">{post?.attributes?.author?.data?.attributes?.name}</a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-clock" /> <a href="/"><time >{post?.attributes?.publishedAt}</time></a></li>

                  </ul>
                </div>{/* End meta top */}
                <div className="content">
                  <p>
                    {post?.attributes?.content}
                  </p>
                  <blockquote>
                    <p>
                      {post?.attributes?.headline}
                    </p>
                  </blockquote>s
                  <img src={blogImg1} className="img-fluid" alt="" />
                  <h3>{post?.attributes.slug}</h3>
                </div>{/* End post content */}
                <div className="meta-bottom">
                  <i className="bi bi-folder" />
                  <ul className="cats">
                    <li><a href="#">Business</a></li>
                  </ul>
                  <i className="bi bi-tags" />
                  <ul className="tags">
                    <li><a href="#">Creative</a></li>
                    <li><a href="#">Tips</a></li>
                    <li><a href="#">Marketing</a></li>
                  </ul>
                </div>{/* End meta bottom */}
              </article>


              <div className="post-author d-flex align-items-center">
                <img src={blogImg1} className="rounded-circle flex-shrink-0" alt="" />
                <div>
                  <h4>Jane Smith</h4>
                  <div className="social-links">
                    <a href="https://twitters.com/#"><i className="bi bi-twitter" /></a>
                    <a href="https://facebook.com/#"><i className="bi bi-facebook" /></a>
                    <a href="https://instagram.com/#"><i className="biu bi-instagram" /></a>
                  </div>
                  <p>
                    Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
                  </p>
                </div>
              </div>

              {/* <div className="comments">
                <h4 className="comments-count">8 Comments</h4>
                <div id="comment-1" className="comment">
                  <div className="d-flex">
                    <div className="comment-img"><img src={blogImg1} alt="" /></div>
                    <div>
                      <h5><a href>Georgia Reader</a> <a href="#" className="reply"><i className="bi bi-reply-fill" /> Reply</a></h5>
                      <time dateTime="2020-01-01">01 Jan,2022</time>
                      <p>
                        Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta.
                        Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="comment-2" className="comment">
                  <div className="d-flex">
                    <div className="comment-img"><img src={blogImg1} alt="" /></div>
                    <div>
                      <h5><a href="/">Aron Alvarado</a> <a href="/" className="reply"><i className="bi bi-reply-fill" /> Reply</a></h5>
                      <time dateTime="2020-01-01">01 Jan,2022</time>
                      <p>
                        Ipsam tempora sequi voluptatem quis sapiente non. Autem itaque eveniet saepe. Officiis illo ut beatae.
                      </p>
                    </div>
                  </div>
                  <div id="comment-reply-1" className="comment comment-reply">
                    <div className="d-flex">
                      <div className="comment-img"><img src={blogImg1} alt="" /></div>
                      <div>
                        <h5><a href>Lynda Small</a> <a href="#" className="reply"><i className="bi bi-reply-fill" /> Reply</a></h5>
                        <time dateTime="2020-01-01">01 Jan,2022</time>
                        <p>
                          Enim ipsa eum fugiat fuga repellat. Commodi quo quo dicta. Est ullam aspernatur ut vitae quia mollitia id non. Qui ad quas nostrum rerum sed necessitatibus aut est. Eum officiis sed repellat maxime vero nisi natus. Amet nesciunt nesciunt qui illum omnis est et dolor recusandae.
                          Recusandae sit ad aut impedit et. Ipsa labore dolor impedit et natus in porro aut. Magnam qui cum. Illo similique occaecati nihil modi eligendi. Pariatur distinctio labore omnis incidunt et illum. Expedita et dignissimos distinctio laborum minima fugiat.
                          Libero corporis qui. Nam illo odio beatae enim ducimus. Harum reiciendis error dolorum non autem quisquam vero rerum neque.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
            {/* <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar-item search-form">
                  <h3 className="sidebar-title">Search</h3>
                  <form action className="mt-3">
                    <input type="text" />
                    <button type="submit"><i className="bi bi-search" /></button>
                  </form>
                </div>
                <div className="sidebar-item categories">
                  <h3 className="sidebar-title">Categories</h3>
                  <ul className="mt-3">
                    <li><a href="#">General <span>(25)</span></a></li>
                    <li><a href="#">Lifestyle <span>(12)</span></a></li>
                    <li><a href="#">Travel <span>(5)</span></a></li>
                    <li><a href="#">Design <span>(22)</span></a></li>
                    <li><a href="#">Creative <span>(8)</span></a></li>
                    <li><a href="#">Educaion <span>(14)</span></a></li>
                  </ul>
                </div>
                <div className="sidebar-item recent-posts">
                  <h3 className="sidebar-title">Recent Posts</h3>
                  <div className="mt-3">
                    <div className="post-item mt-3">
                      <img src={blogImg1} alt="" className="flex-shrink-0" />
                      <div>
                        <h4><a href="blog-post.html">Nihil blanditiis at in nihil autem</a></h4>
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </div>
                    </div>
                    <div className="post-item">
                      <img src={blogImg1} alt="" className="flex-shrink-0" />
                      <div>
                        <h4><a href="blog-post.html">Quidem autem et impedit</a></h4>
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </div>
                    </div>
                    <div className="post-item">
                      <img src={blogImg1} alt="" className="flex-shrink-0" />
                      <div>
                        <h4><a href="blog-post.html">Id quia et et ut maxime similique occaecati ut</a></h4>
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </div>
                    </div>
                    <div className="post-item">
                      <img src={blogImg1} alt="" className="flex-shrink-0" />
                      <div>
                        <h4><a href="blog-post.html">Laborum corporis quo dara net para</a></h4>
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </div>
                    </div>
                    <div className="post-item">
                      <img src={blogImg1} alt="" className="flex-shrink-0" />
                      <div>
                        <h4><a href="blog-post.html">Et dolores corrupti quae illo quod dolor</a></h4>
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-item tags">
                  <h3 className="sidebar-title">Tags</h3>
                  <ul className="mt-3">
                    <li><a href="#">App</a></li>
                    <li><a href="#">IT</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Office</a></li>
                    <li><a href="#">Creative</a></li>
                    <li><a href="#">Studio</a></li>
                    <li><a href="#">Smart</a></li>
                    <li><a href="#">Tips</a></li>
                    <li><a href="#">Marketing</a></li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetailPage