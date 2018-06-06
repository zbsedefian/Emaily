// Rendering control (React Router)
// using import b/c ES prefers it, while node uses 'require'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
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

export default App