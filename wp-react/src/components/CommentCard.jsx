import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BsFillHeartFill, BsFillHandThumbsUpFill, BsFillHandThumbsDownFill } from 'react-icons/bs';
import { Image } from 'react-bootstrap';

const CommentCard = ({ comment }) => {
  return (
    <Card className='my-3'>
      <Card.Body>
        <Card.Title><Image className='me-2' roundedCircle src={comment.author_avatar_urls['48']} alt={comment.author_name + "'s image"} />{comment.author_name}</Card.Title>
        <Card.Text dangerouslySetInnerHTML={{__html: comment.content.rendered}}></Card.Text>
        <Card.Subtitle className="mb-2 text-muted text-end">{comment.date.slice(0, 10)}</Card.Subtitle>

        <Button variant="link" className="text-success">
          <BsFillHeartFill /> Like
        </Button>
        
        
        <Button variant="link" className="text-primary">
          <BsFillHandThumbsUpFill /> Thumbs Up
        </Button>
        <Button variant="link" className="text-primary">
          <BsFillHandThumbsDownFill /> Thumbs Down
        </Button> 
      </Card.Body>
    </Card>
  );
};

export default CommentCard;
