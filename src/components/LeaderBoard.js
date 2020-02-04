import React from 'react';
import {
    Card, CardTitle, Container, Row, Col,
    CardBody, CardText
} from 'reactstrap';

import user from '../img/user.jfif';
import { connect } from 'react-redux';



class LeaderBoard extends React.Component {

    render() {

        if (Object.entries(this.props.mystate.users_reducer).length > 0) {

            return (
                <div>
                    <Container>
                        <Row>
                            <Col md={{ size: 6, offset: 3 }}>


                                {Object.values(this.props.mystate.users_reducer.users).map(n =>


                                    <Card key={n.id}>

                                        <img src={n.avatarURL} className='avatar' alt={`Avatar of ${user.name}`} />

                                        <CardBody>
                                            <CardTitle> {n.name} </CardTitle>
                                            <CardText> Answered Questions : {Object.keys(n.answers).length} </CardText>
                                            <CardText> Created Questions : {n.questions.length} </CardText>
                                            {/* <CardText> Score : 10 </CardText> */}
                                        </CardBody>

                                    </Card>



                                )
                                }



                            </Col>


                        </Row>
                    </Container>
                </div>
            );
        }

        else {
            return <div> loading data</div>
        }

    }
}


export function mapStateToProps(mystate) {
    return {
        mystate
    }
}



export default connect(mapStateToProps)(LeaderBoard);