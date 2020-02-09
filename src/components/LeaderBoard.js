import React from 'react';
import {
    Card, CardTitle, Container, Row, Col,
    CardBody, CardText
} from 'reactstrap';

import user from '../img/user.jfif';
import { connect } from 'react-redux';

class LeaderBoard extends React.Component {

    render() {

        if (Object.entries(this.props.users).length > 0) {

            const sorted_obj = Object.values(this.props.users).sort((b, a) => (Object.keys(a.answers).length + a.questions.length) - (Object.keys(b.answers).length + b.questions.length));

            return (
                <div>
                    <Container>
                        <Row>
                            <Col md={{ size: 6, offset: 3 }}>


                                {
                                    sorted_obj.map(n =>

                                        <Card key={n.id}>

                                            <img src={n.avatarURL} className='avatar' alt={`Avatar of ${user.name}`} />
                                            <CardTitle> {n.name} </CardTitle>

                                            <CardBody>
                                                <CardText> Answered Questions : {Object.keys(n.answers).length} </CardText>
                                                <CardText> Created Questions : {n.questions.length} </CardText>
                                                <CardText> Score : {Object.keys(n.answers).length + n.questions.length}</CardText>
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
        users: mystate.users_reducer
    }
}



export default connect(mapStateToProps)(LeaderBoard);