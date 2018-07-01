// Rendering control (React Router)
// using import b/c ES prefers it, while node uses 'require'
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component {
    
    //fetch current user once component is mounted
    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />  {/* equivalent to: <Route path="/" component={Header} /> */}
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App)