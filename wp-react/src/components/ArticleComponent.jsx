
    import React from 'react';
    import { useParams } from 'react-router-dom';
    import { Col,  Image, Row } from 'react-bootstrap';
    import Loading from './Loading';
    import { FaCalendarAlt } from 'react-icons/fa';
    import CommentCard from './CommentCard';
import { useSelector } from 'react-redux';

    export default function ArticleComponent() {
        const { articleId } = useParams();
        const posts = useSelector(state => state.posts.results);
        const post = posts.find(post => post.id === parseInt(articleId))
        console.log(posts)

        return (

            !post ? <Loading /> :
                <>
                <Row className='my-5 mx-2' >
                    <Col md={8} className=''>
                    <Image width={'100%'} src={post._embedded['wp:featuredmedia'][0].source_url } alt={post._embedded['wp:featuredmedia'][0].alt_text} />
                        <h1 className='bolder text-center' dangerouslySetInnerHTML={{ __html: post.title?.rendered }}></h1>
                        {post._embedded?.author[0].avatar_urls['96'] &&
                            <h2 className='text-white-50 my-2 d-flex justify-content-between align-items-baseline'>
                                <span className='mx-2'><Image className='me-2' roundedCircle src={post._embedded?.author[0].avatar_urls['96']} alt={post._embedded?.author[0].name + "'s image"} />
                                    {post._embedded?.author[0].name}</span>
                                <span ><FaCalendarAlt className='me-2' />
                                    {post.date?.slice(0, 10)}</span></h2>}
                        <div className='content' dangerouslySetInnerHTML={{ __html: post.content?.rendered }}></div>
                    </Col>
                    <Col md={4}className='d-none d-md-block'>
                        <h2>Comments Section:</h2>
                        {post._embedded?.replies ? post._embedded?.replies[0].map((comment, i) => <CommentCard key={i} comment={comment} />) : <p>no comments...</p>}
                    </Col>
                </Row>
                
                </>


        )
    }
