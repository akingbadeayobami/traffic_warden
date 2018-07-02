import React from 'react';
import { Col, Card } from 'react-materialize';

export default (props => {
    const {
        posts
    } = props; 
    return (
        posts.map(post => 
            <Col m={6} s={12}>
                <Card className='blue-grey' textClassName='white-text' title='Mile 12 - Slow'
                    actions={[<a href='#'>UP vote</a>, <a href='#'>Down vote</a>, <a href='#'>Comment</a>]}>
                    Traffic is going very slowly here.
                                <p className="extra-details right"><i>Akingbade Ayobami</i> - <i>53 mins ago</i> </p>
                </Card>
            </Col>
        )
    );
});
