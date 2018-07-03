import React from 'react';
import { Input, Row, Button } from 'react-materialize';

export default (props => {
    const {
        handleNewPostSubmission,
        handlePostMessageChange,
        handlePostLevelChange,
        handlePostLocationChange,
        postForm
    } = props;
    return (
        <form onSubmit={handleNewPostSubmission}>
            <Row className="container">
                <Input s={12} type='textarea' label="Your Report" validate onChange={handlePostMessageChange} value={postForm.message}></Input>
                <Input s={6} type='select' label="Location" onChange={handlePostLocationChange}>
                    <option value='Mile 12'>Mile 12</option>
                    <option value='Ikeja'>Ikeja</option>
                    <option value='Lekki'>Lekki</option>
                </Input>
                <Input s={6} type='select' label="Level" onChange={handlePostLevelChange}>
                    <option value='0'>Fast</option>
                    <option value='1'>Slow</option>
                    <option value='2'>Blocked</option>
                </Input>
                <Button waves='light' className="right" type="submit">Submit</Button>
            </Row>
        </form>
    );
});