import React from 'react';
import {
    Card, CardTitle, Container, Row, Col,
    CardBody, CardImg ,CardText
} from 'reactstrap';

import user from '../img/user.jfif';
import { connect } from 'react-redux';

import {receive_users,loadData} from '../actions/users'
import {set_authed_user} from '../actions/authedUser'


class LeaderBoard extends React.Component {

    componentDidMount() {
        this.props.loadData();
      }
    

    render(){

        // console.log(this.props , 'headerboard')

        if (Object.entries(this.props.mystate.users_reducer).length > 0) {
            // console.log('fff')


        return(
           <div>
                 <Container>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>


            { Object.values(this.props.mystate.users_reducer.state.users).map( n => 
      
                     
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

    else{
        return <div> loading data</div>
    }

}
}

const mapDispatchToProps = dispatch => ({
    receive_users: () => dispatch(receive_users()),
    loadData: () => dispatch(loadData()) ,
    setUser(id) {
        dispatch(set_authed_user(id));
    }
  });
  

export function mapStateToProps(mystate) {
    return {
        mystate
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(LeaderBoard) ;