import '../assets/css/style.css'
import React from 'react';
const blogImg1 = '/img/blog/blog-1.jpg'
import '../assets/css/variables.css'


function BlogPage() {
    return (
        <>
         <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="/">Home</a></li>
              <li>Blog </li>
            </ol>
            <h2>Blog </h2>
          </div>
        </section>
        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <div className="row g-5">
              <div className="col-lg-8">
                <div className="row gy-4 posts-list">
                  <div className="col-lg-6">
                    <article className="d-flex flex-column">
                      <div className="post-img">
                        <img src={blogImg1} alt="" className="img-fluid" />
                      </div>
                      <h2 className="title">
                        <a href="/blogdetail">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</a>
                      </h2>
                      <div className="meta-top">
                        <ul>
                          <li className="d-flex align-items-center"><i className="bi bi-person" /> <a href="/blogdetail">John Doe</a></li>
                          <li className="d-flex align-items-center"><i className="bi bi-clock" /> <a href="/blogdetail"><time dateTime="2022-01-01">Jan 1, 2022</time></a></li>
                          <li className="d-flex align-items-center"><i className="bi bi-chat-dots" /> <a href="/blogdetail">12 Comments</a></li>
                        </ul>
                      </div>
                      <div className="content">
                        <p>
                          Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                        </p>
                      </div>
                      <div className="read-more mt-auto align-self-end">
                        <a href="/blogdetail">Read More</a>
                      </div>
                    </article>
                  </div>
                  <div className="col-lg-6">
                    <article className="d-flex flex-column">
                      <div className="post-img">
                        <img src={blogImg1} alt="" className="img-fluid" />
                      </div>
                      <h2 className="title">
                        <a href="/blogdetail">Nisi magni odit consequatur autem nulla dolorem</a>
                      </h2>
                      <div className="meta-top">
                        <ul>
                          <li className="d-flex align-items-center"><i className="bi bi-person" /> <a href="/blogdetail">John Doe</a></li>
                          <li className="d-flex align-items-center"><i className="bi bi-clock" /> <a href="/blogdetail"><time dateTime="2022-01-01">Jan 1, 2022</time></a></li>
                          <li className="d-flex align-items-center"><i className="bi bi-chat-dots" /> <a href="/blogdetail">12 Comments</a></li>
                        </ul>
                      </div>
                      <div className="content">
                        <p>
                          Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.
                        </p>
                      </div>
                      <div className="read-more mt-auto align-self-end">
                        <a href="/blogdetail">Read More</a>
                      </div>
                    </article>
                  </div>{/* End post list item */}
                  <div className="col-lg-6">
                    <article className="d-flex flex-column">
                      <div className="post-img">
                        <img src={blogImg1} alt="" className="img-fluid" />
                      </div>
                      <h2 className="title">
                        <a href="/blogdetail">Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.</a>
                      </h2>
                      <div className="meta-top">
                        <ul>
                          <li className="d-flex align-items-center"><i className="bi bi-person" /> <a href="/blogdetail">John Doe</a></li>
                          <li className="d-flex align-items-center"><i className="bi bi-clock" /> <a href="/blogdetail"><time dateTime="2022-01-01">Jan 1, 2022</time></a></li>
                          <li className="d-flex align-items-center"><i className="bi bi-chat-dots" /> <a href="/blogdetail">12 Comments</a></li>
                        </ul>
                      </div>
                      <div className="content">
                        <p>
                          Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.
                        </p>
                      </div>
                      <div className="read-more mt-auto align-self-end">
                        <a href="/blogdetail">Read More</a>
                      </div>
                    </article>
                  </div>
                  <div className="col-lg-6">
                    <article className="d-flex flex-column">
                      <div className="post-img">
                        <img src={blogImg1} alt="" className="img-fluid" />
                      </div>
                      <h2 className="title">
                        <a href="/blogdetail">Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.</a>
                      </h2>
                      <div className="meta-top">
                        <ul>
                          <li className="d-flex align-items-center"><i className="bi bi-person" /> <a href="/blogdetail">John Doe</a></li>
                          <li className="d-flex align-items-center"><i className="bi bi-clock" /> <a href="/blogdetail"><time dateTime="2022-01-01">Jan 1, 2022</time></a></li>
                          <li className="d-flex align-items-center"><i className="bi bi-chat-dots" /> <a href="/blogdetail">12 Comments</a></li>
                        </ul>
                      </div>
                      <div className="content">
                        <p>
                          Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui.
                        </p>
                      </div>
                      <div className="read-more mt-auto align-self-end">
                        <a href="/blogdetail">Read More</a>
                      </div>
                    </article>
                  </div>{/* End post list item */}
                  <div className="col-lg-6">
                    <article className="d-flex flex-column">
                      <div className="post-img">
                        <img src={blogImg1} alt="" className="img-fluid" />
                      </div>
                      <h2 className="title">
                        <a href="/blogdetail">Accusamus quaerat aliquam qui debitis facilis consequatur</a>
                      </h2>
                      <div className="meta-top">
                        <ul>
                          <li className="d-flex align-items-center"><i className="bi bi-person" /> <a href="/blogdetail">John Doe</a></li>
                          <li className="d-flex align-items-center"><i className="bi bi-clock" /> <a href="/blogdetail"><time dateTime="2022-01-01">Jan 1, 2022</time></a></li>
                          <li className="d-flex align-items-center"><i className="bi bi-chat-dots" /> <a href="/blogdetail">12 Comments</a></li>
                        </ul>
                      </div>
                      <div className="content">
                        <p>
                          In itaque assumenda aliquam voluptatem qui temporibus iusto nisi quia. Autem vitae quas aperiam nesciunt mollitia tempora odio omnis. Ipsa odit sit ut amet necessitatibus. Quo ullam ut corrupti autem consequuntur totam dolorem.
                        </p>
                      </div>
                      <div className="read-more mt-auto align-self-end">
                        <a href="/blogdetail">Read More</a>
                      </div>
                    </article>
                  </div>{/* End post list item */}
                  <div className="col-lg-6">
                    <article className="d-flex flex-column">
                      <div className="post-img">
                        <img src={blogImg1} alt="" className="img-fluid" />
                      </div>
                      <h2 className="title">
                        <a href="/blogdetail">Distinctio provident quibusdam numquam aperiam aut</a>
                      </h2>
                      <div className="meta-top">
                        <ul>
                          <li className="d-flex align-items-center"><i className="bi bi-person" /> <a href="/blogdetail">John Doe</a></li>
                          <li className="d-flex align-items-center"><i className="bi bi-clock" /> <a href="/blogdetail"><time dateTime="2022-01-01">Jan 1, 2022</time></a></li>
                          <li className="d-flex align-items-center"><i className="bi bi-chat-dots" /> <a href="/blogdetail">12 Comments</a></li>
                        </ul>
                      </div>
                      <div className="content">
                        <p>
                          Expedita et temporibus eligendi enim molestiae est architecto praesentium dolores. Illo laboriosam officiis quis. Labore officia quia sit voluptatem nisi est dignissimos totam. Et voluptate et consectetur voluptatem id dolor magni impedit. Omnis dolores sit.
                        </p>
                      </div>
                      <div className="read-more mt-auto align-self-end">
                        <a href="/blogdetail">Read More</a>
                      </div>
                    </article>
                  </div>{/* End post list item */}
                </div>{/* End blog posts list */}
                <div className="blog-pagination">
                  <ul className="justify-content-center">
                    <li><a href="#">1</a></li>
                    <li className="active"><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                  </ul>
                </div>{/* End blog pagination */}
              </div>
              <div className="col-lg-4">
                <div className="sidebar">
                  <div className="sidebar-item search-form">
                    <h3 className="sidebar-title">Search</h3>
                    <form action className="mt-3">
                      <input type="text" />
                      <button type="submit"><i className="bi bi-search" /></button>
                    </form>
                  </div>{/* End sidebar search formn*/}
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
                  </div>{/* End sidebar categories*/}
                  <div className="sidebar-item recent-posts">
                    <h3 className="sidebar-title">Recent Posts</h3>
                    <div className="mt-3">
                      <div className="post-item mt-3">
                        <img src={blogImg1} alt="" className="flex-shrink-0" />
                        <div>
                          <h4><a href="blog-post.html">Nihil blanditiis at in nihil autem</a></h4>
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </div>
                      </div>{/* End recent post item*/}
                      <div className="post-item">
                        <img src={blogImg1} alt="" className="flex-shrink-0" />
                        <div>
                          <h4><a href="blog-post.html">Quidem autem et impedit</a></h4>
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </div>
                      </div>{/* End recent post item*/}
                      <div className="post-item">
                        <img src={blogImg1} alt="" className="flex-shrink-0" />
                        <div>
                          <h4><a href="blog-post.html">Id quia et et ut maxime similique occaecati ut</a></h4>
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </div>
                      </div>{/* End recent post item*/}
                      <div className="post-item">
                        <img src={blogImg1} alt="" className="flex-shrink-0" />
                        <div>
                          <h4><a href="blog-post.html">Laborum corporis quo dara net para</a></h4>
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </div>
                      </div>{/* End recent post item*/}
                      <div className="post-item">
                        <img src={blogImg1} alt="" className="flex-shrink-0" />
                        <div>
                          <h4><a href="blog-post.html">Et dolores corrupti quae illo quod dolor</a></h4>
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </div>
                      </div>{/* End recent post item*/}
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
              </div>
            </div>
          </div>
        </section>{/* End Blog Section */}    
        </>
    )
}

export default BlogPage