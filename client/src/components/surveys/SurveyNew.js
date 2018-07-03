import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

class SurveyNew extends Component {
    
    state = { showFormReview: false } // syntax from create-react-app babel thing, replaces constructor
    
    renderContent() {
        if (this.state.showFormReview)
            return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })} />
        return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({ // using reduxForm here to dump all values if SurveyNew is unmounted
    form: 'surveyForm'
})(SurveyNew)