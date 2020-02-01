import React from 'react';
import {
    Card, CardTitle, Container, Row, Col,
    CardBody, CardSubtitle, CardImg ,Progress ,CardText
} from 'reactstrap';
import user from '../img/user.jfif';

class QuestionDetails extends React.Component {

    render(){
        return(

            <div>

            <Container>
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>


                        <Card>
                            <CardImg top width="50%" src={user} alt="Card image cap" />
                            <CardBody>
                                <CardTitle> Asked by Nesma Arby  </CardTitle>
                                <CardSubtitle> Results : </CardSubtitle>

                                 <CardText>  
                                <p>would you rather find 50$ ?</p>     
                                <Progress value={50}>50%</Progress>
                                <small>2 out of 3 votes</small>
                                 </CardText>

                                 <CardText>  
                                <p>would you rather find 50$ ?</p>     
                                <Progress value={50}>50%</Progress>
                                <small>2 out of 3 votes</small>
                                 </CardText>
                        
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </Container>


        </div>




        );
    }


}

export default QuestionDetails ;