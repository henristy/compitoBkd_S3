
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import { FaCalendarAlt, FaComment, FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Col } from 'react-bootstrap';


function PostCard({post}) {
    
    const navigate = useNavigate();
    return (
        <Col>
            <Card className='my-4'>
                <Card.Img variant="top" onClick={() => navigate('/article/' + post.id + '/'  + post.slug)} src={post._embedded['wp:featuredmedia']? post._embedded['wp:featuredmedia'][0].source_url : 'tumb.png' } />
                <Card.Body>
                    <Card.Title dangerouslySetInnerHTML={{ __html: post.title.rendered}}></Card.Title>
                    <Card.Text className='d-flex fs-6'>
                        <span ><Image className='me-1' roundedCircle width={24} src={(post._embedded.author[0]?.avatar_urls && post._embedded.author[0].avatar_urls['24']) || 'download.png?s=24&d=identicon&r=g' } alt={post._embedded.author[0]?.name + "'s image"} />
                        {post._embedded.author[0]?.name || 'unknown'}</span>
                        <span className='mx-2'><FaCalendarAlt className='me-1'/> 
                        {post.date.slice(0, 10)}</span>
                        <span><FaComment className='me-1'/> {(post._embedded?.replies && post._embedded.replies[0].length) || 0} Comments</span>
                    </Card.Text>
                    <Card.Text className='border-top mx-1 text-white-50' dangerouslySetInnerHTML={{ __html: post.content.rendered.slice(0, 250) + '...' }}></Card.Text>
                    <div className='d-flex justify-content-between'>
                        <div><FaTwitter className='rounded-circle fs-2 text-danger pe-1'/> <FaFacebook className='rounded-circle fs-2 text-danger pe-1'/>  <FaLinkedin className='rounded-circle fs-2 text-danger pe-1'/> <FaPinterest className='rounded-circle fs-2 text-danger pe-1'/> </div>
                        <Button variant="outline-warning" onClick={() => navigate('/article/'+ post.id + '/'  + post.slug)}>Read more</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default PostCard;