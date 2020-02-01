import React from 'react';
import {
    Card, Button, CardTitle, Container, Row, Col,
    CardBody, CardSubtitle, CardImg , Form, FormGroup, Label, Input
} from 'reactstrap';
import user from '../img/user.jfif';


class Question extends React.Component {

    render() {
        return (

            <div>

                <Container>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>

                            <Card>
                                <CardImg top width="50%" src={user} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle> Nesma Arby asks :</CardTitle>
                                    <CardSubtitle> Would You Rather ! </CardSubtitle>
                                    <Form className='question-form'>
                                        <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio" />
                                            Option 1
                                        </Label>
                                        </FormGroup>

                                        <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio" />
                                            Option 2
                                        </Label>
                                        </FormGroup>

                                    </Form>
                                    <Button> Submit </Button>
                                </CardBody>
                            </Card>

                        </Col>
                    </Row>
                </Container>


            </div>


        );
    }


}

export default Question;