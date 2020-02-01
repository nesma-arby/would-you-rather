import React from 'react';
import { Button, Form, FormGroup, Input, Container, Row, Col} from 'reactstrap';


class NewQuestion extends React.Component {

    render() {
        return (


            <div>

                <Container>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>

                            <div className='create-question'>

                                <h3 className='text-center text-bold mb-4'> Create New Question</h3>

                                <Form>

                                    <h6 className='text-bold mb-3'>
                                        Would you rather
                                    </h6>

                                    <FormGroup>
                                        <Input type="text" name="option1" id="exampleoption1" placeholder="enter option 1 text here" />
                                    </FormGroup>


                                    <FormGroup>
                                        <Input type="text" name="option2" id="exampleoption2" placeholder="enter option 2 text here" />
                                    </FormGroup>

                                    <Button>Submit</Button>

                                </Form>

                            </div>


                        </Col>
                    </Row>
                </Container>

            </div>




        );
    }


}

export default NewQuestion;