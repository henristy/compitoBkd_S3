import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../slice/postSlice';
import { Pagination, Row } from 'react-bootstrap';
import PostCard from './PostCard';
import MessageError from './MessageError';
import Loading from './Loading';
import { useParams } from 'react-router-dom';

export default function PostsComponent() {
    let { query } = useParams();
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(posts.currentPage);
    console.log(currentPage)

    useEffect(() => {
        !posts.results && dispatch(getPosts(currentPage)); 
        
    }, []);

    let filteredPosts = posts.results;
    if (query) {
        filteredPosts = posts.results.filter(post => post.title.rendered.toLowerCase().includes(query.toLowerCase()));
    }

    return (
        <>
            {query && <h1 className='mt-5'>Search users for: "{query}"</h1>}
            <Row md={3} className='mt-5'>
                {posts.loading && <Loading />}
                {posts.error ? <MessageError err={posts.error} /> :
                    filteredPosts && (filteredPosts.length > 0 ? filteredPosts.map((post, i) => <PostCard key={i} post={post} />) : query && <h3>Couldn't find what you were searching for</h3>)
                }
            </Row>
            <Pagination>
                <Pagination.Prev
                    onClick={() => {
                        setCurrentPage(prevPage => prevPage - 1)
                        dispatch(getPosts(currentPage))
                    }
                    } 
                    disabled={currentPage === 1}
                />
                <Pagination.Next
                    onClick={() => {setCurrentPage(prevPage => prevPage + 1)
                        dispatch(getPosts(currentPage))}} 
                />
            </Pagination>
        </>
    );
}
