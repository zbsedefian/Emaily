import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import formFields from './formFields'
import * as actions from '../../actions'

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name} style={{marginBottom: '20px'}}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        )
    })
    
    return (
        <div>
            
            <h5>Please confirm your entries</h5>
            
            {reviewFields}

            <button className="yellow darken-3 btn-flat left white-text" onClick={onCancel} >
                Back
            </button>
            
            <button type="submit" className="green btn-flat right white-text" onClick={() => submitSurvey(formValues, history)}>
                <i className="material-icons right">email</i>
                Send survey
            </button>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))