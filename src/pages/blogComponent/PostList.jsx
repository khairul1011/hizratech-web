import React from 'react'
import PostCard from './PostCard'

const PostList = ({ posts }) => {
    return (
        <>
            {
                posts.length === 0 ? <h3>No Post</h3> : posts.map((post,index) => {
                    return (  
                            <div className="col-lg-6" key={index}>
                                <PostCard data={post} />
                            </div>
                    )
                })
            }

        </>
    )
}

export default PostList