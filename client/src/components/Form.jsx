import React from 'react';
import { Input, Row, Button } from 'react-materialize';

export default (props => {
    const {
        newPost
    } = props;
    return (
        <Row className="container">
            <Input s={12} type='textarea' label="Your Report" validate></Input>
            <Input s={6} type='select' label="Location">
                <option value='Mile 12'>Mile 12</option>
                <option value='Ikeja'>Ikeja</option>
                <option value='Lekki'>Lekki</option>
            </Input>
            <Input s={6} type='select' label="Level">
                <option value='Fast'>Fast</option>
                <option value='Slow'>Slow</option>
                <option value='Blocked'>Blocked</option>
            </Input>
            <Button waves='light' className="right">Submit</Button>
        </Row>
    );
});