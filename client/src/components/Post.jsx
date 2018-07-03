import React from 'react';
import { Col, Card, Chip } from 'react-materialize';

const levelBadge = (level) => {
    switch(level) {
        case 0:
            return <Chip className="green"> Fast</Chip>;
            break;
        case 1:
            return <Chip className="yellow"> Slow</Chip>;
            break; 
        case 2:
            return <Chip className="red"> Blocked</Chip>;
            break;
        default:
            return <Chip > Not Known</Chip>;
    }
}

export default (props => {
    const {
        posts
    } = props;
    return (
        posts.map((post, i) =>
            <Col m={6} s={12} key={post.id}>
                <Card className='blue-grey'
                    actions={[<a href='#'>UP vote</a>, <a href='#'>Down vote</a>, <a href='#'>Comment</a>]}>
                    <h4>{post.location}<span className="right">{levelBadge(post.level)}</span></h4>
                    <p>
                        {post.message}
                        <span className="extra-details right"><i>Akingbade Ayobami</i> - <i>53 mins ago</i> </span>
                    </p>
                </Card>
            </Col>
        )
    );
});
