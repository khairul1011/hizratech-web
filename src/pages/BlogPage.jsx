import '../assets/css/style.css'
import React, { useEffect, useState } from 'react';
import '../assets/css/variables.css'


function BlogPage() {
  
  const [newsData, setNewsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('technology');
  const [loading, setLoading] = useState(true);
  const apiKey = 'f6feeba310fb462c9824deca3c2fe889';

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setLoading(true);
        let url = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en&max=6`;

        if (selectedCategory !== 'all') {
          url += `&topic=${selectedCategory}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false when data fetching is completed or encountered an error
      }
    };

    fetchNewsData();
  }, [selectedCategory]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(searchQuery)}&apikey=${apiKey}&max=6`;
      const response = await fetch(url);
      const data = await response.json();
      setNewsData(data.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false when data fetching is completed or encountered an error
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

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
                {newsData.map((item, index) => (
                  <div className="col-lg-6" key={index}>
                    {loading ? (
                      <div>Loading...</div>
                    ) : (
                      <article className="d-flex flex-column">
                        <div className="post-img">
                          <img src={item.image} alt="" className="img-fluid" />
                        </div>
                        <h2 className="title">
                          <a href="/blogdetail">{item.title}</a>
                        </h2>
                        <div className="meta-top">
                          <ul>
                            <li className="d-flex align-items-center"><i className="bi bi-person" /> <a href="/blogdetail">{item.source.name}</a></li>
                            <li className="d-flex align-items-center"><i className="bi bi-clock" /> <a href="/blogdetail"><time >{item.publishedAt}</time></a></li>
                            <li className="d-flex align-items-center"><i className="bi bi-chat-dots" /> <a href="/blogdetail">12 Comments</a></li>
                          </ul>
                        </div>
                        <div className="content">
                          <p>
                            {item.description}
                          </p>
                        </div>
                        <div className="read-more mt-auto align-self-end">
                          <a href="/blogdetail">Read More</a>
                        </div>
                      </article>
                    )}
                  </div>
                ))}
              </div>{/* End blog posts list */}
              {/* <div className="blog-pagination">
                <ul className="justify-content-center">
                  <li><a href="#">1</a></li>
                  <li className="active"><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                </ul>
              </div> */}
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar-item search-form">
                  <h3 className="sidebar-title">Search</h3>
                  <form action="" className="mt-3" onSubmit={handleSearchSubmit}>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleInputChange}
                    />
                    <button type="submit">
                      <i className="bi bi-search" />
                    </button>
                  </form>
                </div>{/* End sidebar search formn*/}
                <div className="sidebar-item categories">
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
                </div>
                {/* <div className="sidebar-item recent-posts">
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
                </div> */}
                <div className="sidebar-item tags">
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