import React, { useEffect, useState } from 'react';
import '../assets/css/style.css'
import '../assets/css/variables.css'
import BlogApi from '../config/BlogApi';
import PostList from './blogComponent/PostList';


const BlogPageStrapi = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        BlogApi.find().then(res => {
            setPosts(res);
            console.log(res);
        });
    }, []);

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
                           <PostList posts={posts} />
                           </div>
                            {/* End blog posts list */}
                            <div className="blog-pagination">
                                <ul className="justify-content-center">
                                    <li><a href="#">1</a></li>
                                    <li className="active"><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar-item search-form">
                                    <h3 className="sidebar-title">Search</h3>
                                    <form action="" className="mt-3" >
                                        <input
                                            type="text"
                                        />
                                        <button type="submit">
                                            <i className="bi bi-search" />
                                        </button>
                                    </form>
                                </div>
                                {/* End sidebar search formn*/}
                                {/* <div className="sidebar-item categories">
                  <h3 className="sidebar-title">Categories</h3>
                  <ul className="mt-3">
                    <li>
                      <a
                        href=""
                        className={selectedCategory === 'general' ? 'active' : ''}
                        onClick={() => handleCategoryChange('general')}
                      >
                        General <span>(25)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className={selectedCategory === 'world' ? 'active' : ''}
                        onClick={() => handleCategoryChange('world')}
                      >
                        World <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className={selectedCategory === 'nation' ? 'active' : ''}
                        onClick={() => handleCategoryChange('nation')}
                      >
                        Nation <span>(5)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className={selectedCategory === 'business' ? 'active' : ''}
                        onClick={() => handleCategoryChange('business')}
                      >
                        Business <span>(22)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className={selectedCategory === 'technology' ? 'active' : ''}
                        onClick={() => handleCategoryChange('technology')}
                      >
                        Technology <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className={selectedCategory === 'entertainment' ? 'active' : ''}
                        onClick={() => handleCategoryChange('entertainment')}
                      >
                        Sntertainment <span>(14)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className={selectedCategory === 'sports' ? 'active' : ''}
                        onClick={() => handleCategoryChange('sports')}
                      >
                        Sports <span>(14)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className={selectedCategory === 'science' ? 'active' : ''}
                        onClick={() => handleCategoryChange('science')}
                      >
                        Science <span>(14)</span>
                      </a>
                    </li>
                  </ul>
                </div> */}
                                {/* <div className="sidebar-item tags">
                  <h3 className="sidebar-title">Tags</h3>
                  <ul className="mt-3">
                    <li><a href="" className={selectedCategory === 'general' ? 'active' : ''}
                      onClick={() => handleCategoryChange('general')}>General</a></li>
                    <li><a href="" className={selectedCategory === 'world' ? 'active' : ''}
                      onClick={() => handleCategoryChange('world')}>World</a></li>
                    <li><a href="" className={selectedCategory === 'nation' ? 'active' : ''}
                      onClick={() => handleCategoryChange('nation')}>Nation</a></li>
                    <li><a href="" className={selectedCategory === 'business' ? 'active' : ''}
                      onClick={() => handleCategoryChange('business')}>Business</a></li>
                    <li><a href="" className={selectedCategory === 'technology' ? 'active' : ''}
                      onClick={() => handleCategoryChange('technology')}>Technology</a></li>
                    <li><a href="" className={selectedCategory === 'entertainment' ? 'active' : ''}
                      onClick={() => handleCategoryChange('entertainment')}>Entertainment</a></li>
                    <li><a href="" className={selectedCategory === 'sports' ? 'active' : ''}
                      onClick={() => handleCategoryChange('sports')}>Sports</a></li>
                    <li><a href="" className={selectedCategory === 'science' ? 'active' : ''}
                      onClick={() => handleCategoryChange('science')}>Science</a></li>
                  </ul>
                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogPageStrapi