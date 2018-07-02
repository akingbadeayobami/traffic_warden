import React, { Component } from 'react';
import { Col, Card } from 'react-materialize';

class TrafficWarden extends Component {
    render() {
        return (
            <Col m={6} s={12}>
                <Card className='blue-grey' textClassName='white-text' title='Mile 12 - Slow'
                    actions={[<a href='#'>UP vote</a>, <a href='#'>Down vote</a>, <a href='#'>Comment</a>]}>
                    Traffic is going very slowly here.
                                <p class="extra-details right"><i>Akingbade Ayobami</i> - <i>53 mins ago</i> </p>
                </Card>
            </Col>
        );
    }
}

export default TrafficWarden;
