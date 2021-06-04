import React from 'react';
import { withRouter } from 'react-router';
//import './Home.css';
import ProjectView from './projectView';

class Home extends React.Component{

    render(){
        return (
            <ProjectView />
        );
    }
}

export default withRouter(Home);