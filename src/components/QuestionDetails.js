import React from 'react';
import {
    Card, CardTitle, Container, Row, Col,
    CardBody, CardSubtitle, Progress
} from 'reactstrap';

import { connect } from 'react-redux'

class QuestionDetails extends React.Component {

     financial(x) {
        return Number.parseFloat(x).toFixed(2);
      }


    render() {

        if (Object.entries(this.props.mystate.users_reducer).length > 0) {

        const users = this.props.mystate.users_reducer;
        const authedUser = this.props.mystate.authedUser_reducer;
        const questions = this.props.mystate.questions_reducer;
        // Get Question if from the url
        const id = this.props.match.params.id

        const answer = users[authedUser].answers[id];

        const total = questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length;
        const percOne = this.financial((questions[id].optionOne.votes.length / total) * 100);
        const percTwo = this.financial((questions[id].optionTwo.votes.length / total) * 100);

        return (

            <div>

                <Container>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>

                            <Card>

                                <img src={users[authedUser].avatarURL} className='avatar'
                                    alt={`Avatar of ${users[authedUser].name}`} />

                                <CardTitle> Asked by {users[authedUser].name} </CardTitle>


                                <CardBody>
                                    <CardSubtitle> Results : </CardSubtitle>
                                    <div className='question-style'>
                                        <p className={ answer === 'optionOne' ? 'choise' : '' } >would you rather <span className='style-text'>{questions[id].optionOne.text}</span></p>
                                        <Progress className='progress-one' style={{ width: `${percOne}%` }} value={`${percOne}%`}> {`${percOne}%`}  </Progress>
                                        <small> Total number of votes <span className='style-text'>{questions[id].optionOne.votes.length}</span> </small>
                                    </div>

                                    <div  className='question-style'>
                                        <p className={ answer === 'optionTwo' ? 'choise' : '' }>would you rather <span className='style-text'>{questions[id].optionTwo.text}</span> </p>
                                        <Progress className='progress-one' style={{ width: `${percTwo}%` }} value={`${percTwo}%` }> {`${percTwo}%`} </Progress>
                                        <small>  Total number of votes <span className='style-text'> {questions[id].optionTwo.votes.length}</span> </small>
                                    </div>

                                </CardBody>
                            </Card>

                        </Col>
                    </Row>
                </Container>


            </div>
        );

    } else{
        return <div></div>
    }



}

}



export function mapStateToProps(mystate) {
    return {
        mystate
    }
}



export default connect(mapStateToProps)(QuestionDetails);