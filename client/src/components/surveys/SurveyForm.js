import _ from 'lodash'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'
import formFields from './formFields'

class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return <Field key={name} component={SurveyField} type='text' label={label} name={name} />
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    
                    {this.renderFields()}
                    
                    <Link to="/surveys" className="red btn-flat left white-text">
                        Cancel
                    </Link>
                    
                    <button type="submit" className="teal btn-flat right white-text">
                        <i className="material-icons right">navigate_next</i>
                        Next
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {}

    _.each(formFields, ({ name, noValueError }) => {
        if(!values[name]) {
            errors[name] = noValueError
        }
    })

    errors.recipients = validateEmails(values.recipients || '')

    return errors
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm)